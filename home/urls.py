from django.urls import path
from home import views

urlpatterns = [
    path('', views.index, name="index"),
    path('get-project-data', views.getProjectData, name='projectdata'),
    path('get-skill-data', views.getSkillData, name='skilldata')
]
