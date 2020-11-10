from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('search', views.search, name='search'),
    path('record', views.record, name='record'),
    path('auth', views.auth, name='auth'),
    path('logout', views.logout, name='logout'),
    path('newrecord', views.newrecord, name='newrecord'),
    path('deleterecord', views.deleterecord, name='deleterecord'),
    path('saveeditrecord', views.saveeditrecord, name='saveeditrecord'),
    path('newaccount', views.newaccount, name='newaccount'),
    path('acceptapplicant', views.acceptapplicant, name='acceptapplicant'),
    path('cancelapplicant', views.cancelapplicant, name='cancelapplicant'),
]