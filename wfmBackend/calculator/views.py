from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import LPProblemSerializer, LPProblemCreateSerializer
from .models import LPProblem
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions, status

class LPProblemCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        data = request.data
        serializer = LPProblemCreateSerializer(data = data)
        if serializer.is_valid(raise_exception=True):
            lp_problem = serializer.create(data)
            if lp_problem:
                return Response(serializer.data, status=status.HTTP_201_CREATED)

class LPProblemView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request):
        queryset = LPProblem.objects.all()
        serializer = LPProblemSerializer(queryset)
        return Response(serializer.data, status=status.HTTP_200_OK)