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