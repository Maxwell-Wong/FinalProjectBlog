from django.db import models


class EventTable(models.Model):
    year = models.CharField(max_length=10)
    date = models.CharField(max_length=10)
    name = models.CharField(max_length=20)
    category = models.CharField(max_length=10)
    url = models.CharField(max_length=50)
# Create your models here.
