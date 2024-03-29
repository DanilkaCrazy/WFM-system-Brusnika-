from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
# Create your models here.

class AppUserManager(BaseUserManager):
	def create_user(self, username, password=None):
		if not username:
			raise ValueError('An username is required.')
		if not password:
			raise ValueError('A password is required.')
		user = self.model(username = username)
		user.set_password(password)
		user.save()
		return user
	def create_superuser(self, username, password=None):
		if not username:
			raise ValueError('A username is required.')
		if not password:
			raise ValueError('A password is required.')
		user = self.create_user(username, password)
		user.is_superuser = True
		user.save()
		return user


class AppUser(AbstractBaseUser, PermissionsMixin):
	manager = "Manager"
	worker = "Employee"
	head = "Leader"
	ROLE_CHOICES = ((worker, "Сотрудник"),(manager,"Менеджер"),(head, "Руководитель"))
	user_id = models.AutoField(primary_key=True)
	username = models.CharField(max_length=50,unique=True)
	first_name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50)
	patronymic = models.CharField(max_length=50)
	role = models.CharField(max_length=50, choices=ROLE_CHOICES, default=worker)
	USERNAME_FIELD = 'username'
	REQUIRED_FIELDS = ['first_name','last_name', 'role']
	objects = AppUserManager()
	def __str__(self):
		return self.username