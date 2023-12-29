from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import LPProblemSerializer, LPProblemSolutionSerializer
from .utils import getLPProblems, getOneLPProblem, solveLPProblem, getOneLPProblemSolution, getLPPSolutions
from .models import LPProblem, LPProblemSolution
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions, status


@api_view(['POST', 'GET'])
def getProblems(request):
    permissions.AllowAny()
    if request.method == 'GET':
        return getLPProblems(request)
    if request.method == 'POST':
        data = request.data
        lp_problem = LPProblem.objects.create(
        workers1_pay=data['workers1_pay'], workers2_pay=data['workers2_pay'], 
		work_volume = data['work_volume'], work_duration=data['work_duration'], workers1_amount=data['workers1_amount'],
        workers2_amount=data['workers2_amount'], min_workers1_amount = data['min_workers1_amount'],
        min_workers2_amount = data['min_workers2_amount'], workers1_profession = data['workers1_profession'],
        workers2_profession = data['workers2_profession']) 
        serializer = LPProblemSerializer(lp_problem, many=False)
        result = solveLPProblem(data['workers1_pay'], data['workers2_pay'], data['work_volume'], data['work_duration'], 
        data['workers1_amount'], data['workers2_amount'], data['min_workers1_amount'], data['min_workers2_amount'], 
        data['workers1_profession'], data['workers2_profession'])
        #lp_sol = LPProblemSolution.objects.create(workers_pay, workers_by_days = result)
        lp_sol = LPProblemSolution.objects.create(problem = lp_problem, workers_pay=result[0], 
        workers1_final=result[1], workers2_final = result[2])
        serializer_sol = LPProblemSolutionSerializer(lp_sol, many=False)
        return Response(serializer.data)

@api_view(['GET'])
def getLPProblem(request, pk):
    if request.method == 'GET':
        return getOneLPProblem(request, pk)

@api_view(['GET'])
def getLPProblemSolution(request,pk):
    if request.method=='GET':
        return getOneLPProblemSolution(request, pk)

@api_view(['GET'])
def getLPProblemSolutions(request):
    if request.method=='GET':
        return getLPPSolutions(request)