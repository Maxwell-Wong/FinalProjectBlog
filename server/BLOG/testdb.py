# -*- coding: utf-8 -*-
 
from django.http import HttpResponse
 
# 数据库操作
def testdb(request):
    return HttpResponse("<p>数据添加成功！</p>")