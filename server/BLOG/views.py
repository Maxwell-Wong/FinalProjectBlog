from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers
from BLOG import models 
def EventList(request):
    #eventList = models.EventTable.objects.order_by("year")
    eventList = models.EventTable.objects.all()
    print(eventList[0].year)
    serialized_data = serializers.serialize('json', eventList)
    return JsonResponse(serialized_data, safe=False)