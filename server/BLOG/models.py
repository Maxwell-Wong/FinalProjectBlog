from django.db import models


class EventTable(models.Model):
    year = models.CharField(max_length=10)
    date = models.CharField(max_length=10)
    name = models.CharField(max_length=20)
    category = models.CharField(max_length=10)
    url = models.CharField(max_length=50)
class Atricle(models.Model):
    #Django自动设置id为自增主键
    ##id = models.AutoField(primary_key=True) #自增id=>主键
    title = models.CharField(max_length=50) 
    date = models.DateField(auto_now_add=False)
    url = models.CharField(max_length=50)
class Tag(models.Model):
    article_id = models.IntegerField()
    tag = models.CharField(max_length=20)
# Create your models here.
