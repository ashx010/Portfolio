from django.db import models

# Create your models here.
class ProjectList(models.Model):
	id = models.AutoField(primary_key=True)
	title = models.CharField(max_length=120)
	sub_title = models.CharField(max_length=300)
	description = models.TextField()
	image = models.ImageField(upload_to='static/images/projects')
	Upload_Choices = [('Web Development', 'Web Development'), ('Data Science', 'Data Science'), ("Both", "Both")]
	category = models.CharField(max_length=50, choices=Upload_Choices)
	github_link = models.URLField(max_length=200)
	project_link = models.URLField(max_length=200)
	homepage_active = models.BooleanField(default=False)

	def __str__(self):
		return self.title + " - " + self.category
	

class SkillList(models.Model):
	id = models.AutoField(primary_key=True)
	skill_name = models.CharField(max_length=100)
	image = models.ImageField(upload_to='static/images/skills')
	Upload_Choices = [('Web Development', 'Web Development'), ('Data Science', 'Data Science'), ("Both", "Both"), ("None", "None")]
	category = models.CharField(max_length=50, choices=Upload_Choices)
	

	def __str__(self):
		return self.skill_name + " - " + self.category
	
class ExperienceList(models.Model):
	id = models.AutoField(primary_key=True)
	company_name = models.CharField(max_length=120)
	role = models.CharField(max_length=120)
	location = models.CharField(max_length=120)
	start_date = models.CharField(max_length=120)
	end_date = models.CharField(max_length=120)
	description = models.TextField()
	
	def __str__(self):
		return self.company_name + " - " + self.role
	
class EducationList(models.Model):
	id = models.AutoField(primary_key=True)
	institution_name = models.CharField(max_length=120)
	degree = models.CharField(max_length=120)
	location = models.CharField(max_length=120)
	start_date = models.CharField(max_length=120)
	end_date = models.CharField(max_length=120)
	description = models.CharField(max_length=120, blank=True)
	
	def __str__(self):
		return self.institution_name + " - " + self.degree