from django.urls import path
from home import views

urlpatterns = [
    path('', views.index, name="index"),
    path('get-project-data', views.getProjectData, name='projectdata'),
    path('get-skill-data', views.getSkillData, name='skilldata'),
    path('get-expedu-data', views.getExpEduData, name='expedudata'),
    path('send-data', views.sendData, name='sendData')
]
