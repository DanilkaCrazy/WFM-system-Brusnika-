from django.db import models

# Create your models here.
class LPProblem(models.Model):
    workers1_pay = models.IntegerField() #ЗП 1
    workers2_pay = models.IntegerField() #ЗП 2
    work_volume = models.IntegerField() # Объем
    work_duration = models.IntegerField() # Продолжительность
    workers1_amount = models.IntegerField() # Кол-во работников 1 (для оценки загрузки)
    workers2_amount = models.IntegerField() # Кол-во работников 2 (для оценки загрузки)
    min_workers1_amount = models.IntegerField() # Минимальное кол-во работников 1 (условие для модели)
    min_workers2_amount = models.IntegerField() # Минимальное кол-во работников 2 (условие для модели)
    workers1_profession = models.CharField(max_length=50) #Имя профессии 1
    workers2_profession = models.CharField(max_length=50) #Имя профессии 2
    def __str__(self):
        return self.work_volume

class LPProblemSolution(models.Model):
    problem = models.ForeignKey(LPProblem, models.SET_NULL,blank=True, null=True)
    workers_pay = models.IntegerField() #минимальные затраты
    #workers_by_days = models.IntegerField() #фин. кол-во работников
    #workers_by_daysList = models.CharField(max_length=1000) #фин. кол-во работников по дням
    workers1_final = models.IntegerField() #Кол-во работников профессии 1
    workers2_final = models.IntegerField() #Кол-во работников профессии 2
    #load = models.BooleanField() #Загруженность