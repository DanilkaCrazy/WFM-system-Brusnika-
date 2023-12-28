from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import LPProblemSerializer, LPProblemCreateSerializer
from .utils import getLPProblems, getOneLPProblem, solveLPProblem
from .models import LPProblem
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions, status


@api_view(['POST', 'GET'])
def getProblems(request):
    if request.method == 'GET':
        return getLPProblems(request)
    if request.method == 'POST':
        data = request.data
        lp_problem = LPProblem.objects.create(
        workers1_pay=data['workers1_pay'], workers2_pay=data['workers2_pay'], 
		work_volume = data['work_volume'], work_duration=data['work_duration'], workers1_amount=data['workers1_amount'],
        workers2_amount=data['workers2_amount'])
        serializer = LPProblemSerializer(lp_problem, many=False)
        result = solveLPProblem(data['workers1_pay'], data['workers2_pay'], data['work_volume'], data['work_duration'], 
        data['workers1_amount'], data['workers2_amount'])
        return Response(result)

@api_view(['GET'])
def getLPProblem(request, pk):
    if request.method == 'GET':
        return getOneLPProblem(request, pk)


