from django.shortcuts import render
from rest_framework.exceptions import PermissionDenied


def get_index(request):
    try:
        return render(request, 'index.html')
    except Exception as e:
        return render(request, 'index.html')
