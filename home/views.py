from django.shortcuts import render, redirect
from django.http import JsonResponse
from home.models import ProjectList, SkillList, EducationList, ExperienceList
from django.core.mail import send_mail
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags

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
    
def getExpEduData(request):
    category = request.GET.get('category')
    if(category == "edu"):
        education = EducationList.objects.all()
        education_list = []
        for edu in education:
            education_list.append({
                'institution_name': edu.institution_name,
                'degree': edu.degree,
                'location': edu.location,
                'start_date': edu.start_date,
                'end_date': edu.end_date,
                'description': edu.description,
            })
        return JsonResponse({'expedu_list': education_list})
    elif (category == "exp"):
        experience = ExperienceList.objects.all()
        experience_list = []
        for exp in experience:
            experience_list.append({
                'company_name': exp.company_name,
                'role': exp.role,
                'location': exp.location,
                'start_date': exp.start_date,
                'end_date': exp.end_date,
                'description': exp.description,
            })
        return JsonResponse({'expedu_list': experience_list})
    else:
        return JsonResponse({'expedu_list': []})
    
def sendData(request):
    try:
        name = request.GET.get('name')
        email = request.GET.get('email')
        message = request.GET.get('message')

        if not all([name, email, message]):
            return JsonResponse({'status': False, 'error': 'Missing fields'}, status=400)
    

        subject = 'Scripet Request'
        sender = 'scripet.tech@gmail.com'
        recipient_list = [email]
        context = {'name': name, 'email':email, 'message':message}
        html_message = render_to_string('email_template214.html', context)
        plain_message = strip_tags(html_message)
        email = EmailMultiAlternatives(subject, plain_message, sender, recipient_list)
        email.attach_alternative(html_message, "text/html")
        email.send()
        return JsonResponse({'status': True})
    
    except:
        return JsonResponse({'status': False, 'error': 'Internal server error'}, status=500)