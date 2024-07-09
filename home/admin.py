from django.contrib import admin
from home.models import ProjectList, SkillList, ExperienceList, EducationList

# Register your models here.

class ProjectListAdmin(admin.ModelAdmin):
    list_display = ['title', 'sub_title', 'category', 'homepage_active']
    search_fields = ['title', 'sub_title', 'category']
    list_filter = ['category', 'homepage_active']

admin.site.register(ProjectList, ProjectListAdmin)

class SkillListAdmin(admin.ModelAdmin):
    list_display = ['skill_name', 'category']
    search_fields = ['skill_name', 'category']
    list_filter = ['category']

admin.site.register(SkillList, SkillListAdmin)

class ExperienceListAdmin(admin.ModelAdmin):
    list_display = ['company_name', 'role', 'location']
    search_fields = ['company_name', 'role', 'location']
    list_filter = ['company_name', 'role', 'location']

admin.site.register(ExperienceList, ExperienceListAdmin)

class EducationListAdmin(admin.ModelAdmin):
    list_display = ['institution_name', 'degree', 'location']
    search_fields = ['institution_name', 'degree', 'location']
    list_filter = ['institution_name', 'degree', 'location']

admin.site.register(EducationList, EducationListAdmin)