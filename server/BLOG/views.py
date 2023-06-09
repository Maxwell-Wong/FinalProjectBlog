from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers
from BLOG import models 
import os
from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import codecs
import json
from django.db.models import Q,Count
from django.contrib.auth import authenticate
def EventList(request):
    #eventList = models.EventTable.objects.order_by("year")
    eventList = models.EventTable.objects.all()
    print(eventList)
    serialized_data = serializers.serialize('json', eventList)
    return JsonResponse(serialized_data, safe=False)
def getArticleList(request):
    #eventList = models.EventTable.objects.order_by("year")
    #获取title+date
    atricleList = models.Atricle.objects.order_by("date").values('id','title','date')
    for article in atricleList:
        #转为字符串时间
        article['date'] = article['date'].strftime('%Y-%m-%d')
        article['year'] = article['date'][0:4]
        article['day'] = article['date'][5:10]
    #查询tag
    tagList = models.Tag.objects.values('article_id','tag')
    tagDict = {}
    for i in tagList:
        if(i['article_id'] in tagDict):
            tagDict[i['article_id']] += i['tag']+' '
        else:
            tagDict[i['article_id']] = i['tag']+' '
    for article in atricleList:
        if(article['id'] in tagDict):
            article['tag'] = tagDict[article['id']]
        else :
            article['tag'] = ' '
    atricleList = json.dumps(list(atricleList))
    print(atricleList)
    return JsonResponse(atricleList, safe=False)
@csrf_exempt #取消csrf认证
def upload_file(request):
    if request.method == 'POST' and request.FILES:
        # 从request.FILES中获取上传的文件对象
        file_obj = request.FILES['file']
        #获取文件title
        title = request.POST.get('title')
        #获取文件tag
        tag_string = request.POST.get('tag')
        #获取文件date
        date = request.POST.get('date')
        #保存到数据库表artilce(url先置为空)
        article = models.Atricle(title=title,date=date,url=' ')
        article.save()
        #保存tag表
        tag_list = tag_string.split()
        for i in tag_list:
            tag=models.Tag(article_id=article.id,tag=i)
            tag.save()
        #设置文件名为ArticleID+文件名=>防止重复
        filename = str(article.id) + file_obj.name
        # 生成文件保存的路径
        filepath = os.path.join(settings.MEDIA_ROOT, filename)
        # 将文件保存到本地
        with open(filepath, 'wb') as f:
            for chunk in file_obj.chunks():
                f.write(chunk)
        #修改刚刚置为空的url
        newArticle = models.Atricle.objects.get(pk=article.id)
        newArticle.url = filepath
        newArticle.save()
        # 返回一个HTTP响应，表示文件已经上传成功
        return HttpResponse('文件已上传')
    else :
        filepath = os.path.join(settings.MEDIA_ROOT, "filename")
        print(filepath)
        return HttpResponse('文件丢失')
def download_file(request):
    #文章
    articleID = request.GET.get('id')
    #获取要下载的文件的路径
    filePath = models.Atricle.objects.get(pk=articleID).url
    print(filePath)
    # 打开文件并读取内容
    with codecs.open(filePath, 'r',encoding='utf-8') as f:
        file_content = f.read()
    # 创建 HTTP 响应并设置 Content-Type 头部
    response = HttpResponse(file_content, content_type='text/markdown;charset=utf-8')
    return response

@csrf_exempt #取消csrf认证
def removeFile(request):
    try:
        #获取id
        articleID = request.POST.get('id')
        print(articleID)
        #获取删除的路径
        filePath = models.Atricle.objects.get(pk=articleID).url
        print(filePath)
        #删除tag表中的项
        count = models.Tag.objects.filter(article_id=articleID).delete()
        print(count)
        #删除Atricle表中的项
        count = models.Atricle.objects.filter(pk=articleID).delete()
        print(count)
        #删除文件
        os.remove(filePath)
        return HttpResponse("delete Yes")
    except:
        return HttpResponse("delete No")


def getTitleLikeList(request):
    try:
        #获取id
        likeTitle = request.GET.get('likeTitle')
        atricleList = models.Atricle.objects.filter(Q(title__icontains=likeTitle)).order_by("date").values('id','title','date')

        for article in atricleList:
            #转为字符串时间
            article['date'] = article['date'].strftime('%Y-%m-%d')
            article['year'] = article['date'][0:4]
            article['day'] = article['date'][5:10]
        #查询tag
        tagList = models.Tag.objects.values('article_id','tag')
        tagDict = {}
        for i in tagList:
            if(i['article_id'] in tagDict):
                tagDict[i['article_id']] += i['tag']+' '
            else:
                tagDict[i['article_id']] = i['tag']+' '
        for article in atricleList:
            if(article['id'] in tagDict):
                article['tag'] = tagDict[article['id']]
            else :
                article['tag'] = ' '
        atricleList = json.dumps(list(atricleList))
        print(atricleList)
        return JsonResponse(atricleList, safe=False)
    except:
        return HttpResponse("获取失败")
    

@csrf_exempt #取消csrf认证
def login(request):
    try:
        #获取用户名
        username = request.POST.get('username')
        #获取密码
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            return HttpResponse('登录成功')
        else:
            return HttpResponse('用户名或者密码错误')
    except:
        return HttpResponse('登录失败')
    
def getTagList(request):
    TagList =  models.Tag.objects.values('tag').annotate(count=Count(id))
    TagList = json.dumps(list(TagList))
    return JsonResponse(TagList, safe=False)

def getTagLikeList(request):
    taglike = request.GET.get('taglike')
    print(taglike)
    returnList = models.Tag.objects.filter(Q(tag__icontains=taglike)).values('article_id')
    IdList = []
    for i in returnList:
        IdList.append(i['article_id'])
    atricleList = models.Atricle.objects.filter(pk__in = IdList).order_by("date").values('id','title','date')
    try:
        for article in atricleList:
            #转为字符串时间
            article['date'] = article['date'].strftime('%Y-%m-%d')
            article['year'] = article['date'][0:4]
            article['day'] = article['date'][5:10]
        #查询tag
        tagList = models.Tag.objects.values('article_id','tag')
        tagDict = {}
        for i in tagList:
            if(i['article_id'] in tagDict):
                tagDict[i['article_id']] += i['tag']+' '
            else:
                tagDict[i['article_id']] = i['tag']+' '
        for article in atricleList:
            if(article['id'] in tagDict):
                article['tag'] = tagDict[article['id']]
            else :
                article['tag'] = ' '
        atricleList = json.dumps(list(atricleList))
        print(atricleList)
        return JsonResponse(atricleList, safe=False)
    except:
        return HttpResponse("获取失败")
def getBLOGMd(request):
    filePath = os.path.join(settings.MEDIA_ROOT, "BLOG介绍.md")
    # 打开文件并读取内容
    with codecs.open(filePath, 'r',encoding='utf-8') as f:
        file_content = f.read()
    # 创建 HTTP 响应并设置 Content-Type 头部
    response = HttpResponse(file_content, content_type='text/markdown;charset=utf-8')
    return response