from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers
from BLOG import models 
import os
from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import codecs
def EventList(request):
    #eventList = models.EventTable.objects.order_by("year")
    eventList = models.EventTable.objects.all()
    print(eventList[0].year)
    serialized_data = serializers.serialize('json', eventList)
    return JsonResponse(serialized_data, safe=False)

@csrf_exempt
def upload_file(request):
    if request.method == 'POST' and request.FILES:
        # 从request.FILES中获取上传的文件对象
        file_obj = request.FILES['file']
        # 从文件对象的name属性中获取文件名
        filename = file_obj.name
        # 生成文件保存的路径
        filepath = os.path.join(settings.MEDIA_ROOT, filename)
        # 将文件保存到本地
        with open(filepath, 'wb') as f:
            for chunk in file_obj.chunks():
                f.write(chunk)
        #获取文件title
        title = request.POST.get('title')
        #获取文件tag
        tag_string = request.POST.get('tag')
        #获取文件date
        date = request.POST.get('date')
        #保存到数据库表artilce
        article = models.Atricle(title=title,date=date,url=filepath)
        article.save()
        #保存tag表
        tag_list = tag_string.split()
        for i in tag_list:
            tag=models.Tag(article_id=article.id,tag=i)
            tag.save()
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