from django.urls import path
from rest_framework import routers
from frontend import views
from django.conf.urls import url

router = routers.DefaultRouter()
urlpatterns = [
    url('^.*$', views.get_index),
    path('', views.get_index),
]
