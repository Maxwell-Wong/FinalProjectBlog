# -*- coding: utf-8 -*-
 
from django.http import HttpResponse
 
# 数据库操作
from BLOG import models 
def testdb(request):
    article = models.EventTable(year='2023',date='09-23',name='JAVA',category='Hello',url='#')
    article.save()
    print(article,article.id)
    return HttpResponse("<p>数据添加成功！</p>")