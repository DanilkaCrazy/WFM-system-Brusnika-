from rest_framework import serializers
from django.core.exceptions import ValidationError
from .models import LPProblem


class LPProblemCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = LPProblem
        fields = '__all__'
    def create(self, clean_data):
        lp_problem = LPProblem.objects.create(workers1_pay=clean_data['workers1_pay'], workers2_pay=clean_data['workers2_pay'], 
		work_volume = clean_data['work_volume'], work_duration=clean_data['work_duration'], workers1_amount=clean_data['workers1_amount'],
        workers2_amount=clean_data['workers2_amount'])
        lp_problem = LPProblem.objects.create()
        lp_problem.save()
        return lp_problem
class LPProblemSerializer(serializers.ModelSerializer):
	class Meta:
		model = LPProblem
		fields = '__all__'