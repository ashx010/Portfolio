from django.contrib import admin
from home.models import ProjectList, SkillList

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