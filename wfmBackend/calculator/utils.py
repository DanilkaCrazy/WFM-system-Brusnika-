from .models import LPProblem
from .serializers import LPProblemSerializer
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


def solveLPProblem(workers1_pay, workers2_pay, work_volume, work_duration, workers1_amount, workers2_amount):
    model = LpProblem("WFMProblem", LpMinimize)
    duration = list(range(work_duration))
    x = LpVariable.dicts('workers1', duration, lowBound=0, cat='Integer')
    y = LpVariable.dicts('workers2', duration, lowBound=0, cat='Integer')
    model+= workers1_pay * lpSum([x[i] for i in duration]) + workers2_pay * lpSum([y[i] for i in duration])
    volume_to_duration = work_volume/work_duration
    for i in duration:
        if i==0:
            model+=x[0]+y[0]>=volume_to_duration
        else:
            model+=x[i-1]+x[i]+y[i-1]+y[i]>=volume_to_duration
        #model+=x[i]>=min_workers1_amount
        #model+=y[i]>=min_workers2_amount
        model+=x[i]>=1
        model+=y[i]>=1
    model.solve()
    payment = value(model.objective)
    return payment