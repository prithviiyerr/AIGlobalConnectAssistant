from django.shortcuts import render
from django.http import JsonResponse
from myapp.emails.parsing import test

# Create your views here.

def test_view(request):
    result = test()  # Assuming test() returns the string
    return JsonResponse({'result': result})
