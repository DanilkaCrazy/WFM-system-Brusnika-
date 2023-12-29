from rest_framework import serializers
from django.core.exceptions import ValidationError
from .models import LPProblem, LPProblemSolution

class LPProblemSerializer(serializers.ModelSerializer):
	class Meta:
		model = LPProblem
		fields = '__all__'

class LPProblemSolutionSerializer(serializers.ModelSerializer):
	class Meta:
		model = LPProblemSolution
		fields = '__all__'