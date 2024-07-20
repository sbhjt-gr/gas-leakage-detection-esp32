from django.http import HttpResponse
from django.shortcuts import render
import requests

def homepage(request):
    data = {'title': 'Gas Leakage Detection - Dashboard'}
    return render(request, "index.html", data)

def leakage(request):
    leakage_val = requests.get('https://blynk.cloud/external/api/get?token=&a0').json()
    return HttpResponse(leakage_val)

def message(request):
    message = requests.get('https://blynk.cloud/external/api/get?token=&v1').text
    return HttpResponse(message)
