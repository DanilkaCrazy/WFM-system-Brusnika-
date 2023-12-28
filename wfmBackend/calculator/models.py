from django.db import models

# Create your models here.
class LPProblem(models.Model):
    workers1_pay = models.IntegerField() #ЗП 1
    workers2_pay = models.IntegerField() #ЗП 2
    work_volume = models.IntegerField() # Объем
    work_duration = models.IntegerField() # Продолжительность
    workers1_amount = models.IntegerField() # Кол-во работников 1 (для оценки загрузки)
    workers2_amount = models.IntegerField() # Кол-во работников 2 (для оценки загрузки)
    #min_workers1_amount = models.IntegerField() # Минимальное кол-во работников 1 (условие для модели)
    #min_workers2_amount = models.IntegerField() # Минимальное кол-во работников 2 (условие для модели)
    
    def __str__(self):
        return self.work_volume