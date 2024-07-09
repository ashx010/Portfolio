from django.shortcuts import render, redirect
from django.http import JsonResponse
from home.models import ProjectList, SkillList


# Create your views here.
def index(request):
    return render(request, 'index.html')

def getProjectData(request):
    category = request.GET.get("category")
    if(category == 'Featured'):
        projects = ProjectList.objects.filter(homepage_active = True)
    else:
        projects = ProjectList.objects.filter(category = category, homepage_active = True)
    project_list = []
    for project in projects:
        project_list.append({
            'title': project.title,
            'sub_title': project.sub_title,
            'description': project.description,
            'image': project.image.url,
            'category': project.category,
            'github_link': project.github_link,
            'project_link': project.project_link,
        })
    return JsonResponse({'project_list': project_list})

def getSkillData(request):
    skills = SkillList.objects.all()
    skill_list = []
    for skill in skills:
        skill_list.append({
            'skill_name': skill.skill_name,
            'image': skill.image.url,
        })
    return JsonResponse({'skill_list': skill_list})
    