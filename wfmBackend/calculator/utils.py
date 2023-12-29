from .models import LPProblem, LPProblemSolution
from .serializers import LPProblemSerializer, LPProblemSolutionSerializer
from rest_framework.response import Response
from pulp import *

def getLPProblems(request):
    lpProblems = LPProblem.objects.all()
    serializer = LPProblemSerializer(lpProblems, many=True)
    return Response(serializer.data)

def getOneLPProblem(request, pk):
    lpProblems = LPProblem.objects.get(id=pk)
    serializer = LPProblemSerializer(lpProblems, many=False)
    return Response(serializer.data)

def createProblem(request):
    data = request.data
    lp_problem = LPProblem.objects.create(
        workers1_pay=data['workers1_pay'], workers2_pay=data['workers2_pay'], 
		work_volume = data['work_volume'], work_duration=data['work_duration'], workers1_amount=data['workers1_amount'],
        workers2_amount=data['workers2_amount']
    )
    serializer = LPProblemSerializer(lp_problem, many=False)
    return Response(serializer.data)

def getOneLPProblemSolution(request, fk):
    LPSol= LPProblemSolution.objects.get(problem=fk)
    serializer = LPProblemSolutionSerializer(LPSol, many=False)
    return Response(serializer.data)

def getLPPSolutions (request):
    lpSolutions = LPProblemSolution.objects.all()
    serializer = LPProblemSolutionSerializer(lpSolutions, many = True)
    return Response(serializer.data)

# def solveLPProblem(workers1_pay, workers2_pay, work_volume, work_duration, workers1_amount, workers2_amount): ##По сменам
#     model = LpProblem("WFMProblem", LpMinimize)
#     duration = list(range(work_duration))
#     x = LpVariable.dicts('workers1', duration, lowBound=0, cat='Integer')
#     y = LpVariable.dicts('workers2', duration, lowBound=0, cat='Integer')
#     model+= workers1_pay * lpSum([x[i] for i in duration]) + workers2_pay * lpSum([y[i] for i in duration])
#     volume_to_duration = work_volume/work_duration
#     for i in duration:
#         if i==0:
#             model+=x[0]+y[0]>=volume_to_duration
#         else:
#             model+=x[i-1]+x[i]+y[i-1]+y[i]>=volume_to_duration
#         #model+=x[i]>=min_workers1_amount
#         #model+=y[i]>=min_workers2_amount
#         model+=x[i]>=1
#         model+=y[i]>=1
#     model.solve()
#     workers_pay = value(model.objective)
#     #workers_by_days = []
#     workers_by_daysList = ''
#     for v in model.variables():
#         #workers_by_days.append(f"{v.name}={v.varValue}")
#         workers_by_daysList+=f"{v.name}={v.varValue} "
#     return workers_pay, workers_by_daysList

def solveLPProblem(workers1_pay, workers2_pay, work_volume, work_duration, workers1_amount, workers2_amount, 
min_workers1_amount, min_workers2_amount, workers1_profession, workers2_profession): ##За период в целом
    model = LpProblem("WFMProblem", LpMinimize)
    duration = list(range(work_duration))
    x = LpVariable(name=workers1_profession,lowBound=0, cat='Integer')
    y = LpVariable(name=workers2_profession,lowBound=0, cat='Integer')
    model+= workers1_pay * x + workers2_pay * y
    #work_volume = work_volume * productivity чтобы получить настоящие объемы надо знать производительность, а мы её не знаем
    volume_to_duration = work_volume/work_duration
    model+= x+y>=volume_to_duration
    model+=x>=min_workers1_amount
    model+=y>=min_workers2_amount
    model.solve()
    workers_pay = value(model.objective)
    #workers_by_days = []
    #workers_by_prof = ''
    workers_by_prof = []
    for v in model.variables():
        #workers_by_days.append(f"{v.name}={v.varValue}")
        #workers_by_prof+=f"{v.name}={v.varValue} "
        workers_by_prof.append(v.varValue)
    return workers_pay, workers_by_prof[0], workers_by_prof[1]