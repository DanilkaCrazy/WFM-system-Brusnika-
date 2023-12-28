from django.db import models
from pulp import *

# Create your models here.
class LPProblem(models.Model):
    workers1_pay = models.IntegerField(null=True) #ЗП 1
    workers2_pay = models.IntegerField(null=True) #ЗП 2
    work_volume = models.IntegerField(null=True) # Объем
    work_duration = models.IntegerField(null=True) # Продолжительность
    workers1_amount = models.IntegerField(null=True) # Кол-во работников 1 (для оценки загрузки)
    workers2_amount = models.IntegerField(null=True) # Кол-во работников 2 (для оценки загрузки)