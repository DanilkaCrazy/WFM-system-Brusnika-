from .models import AppUser
from .serializers import UserSerializer
from rest_framework.response import Response

def getUsers(request):
    users = AppUser.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

def getUser(request, pk):
    users = AppUser.objects.get(id=pk)
    serializer = UserSerializer(lpProblems, many=False)
    return Response(serializer.data)