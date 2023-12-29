from django.urls import path
from . import views

urlpatterns = [
	#path('', views.LPProblemCreate.as_view(), name='calculator'),
    #path('v', views.LPProblemView.as_view(), name='calculator'),
    #path('problem', views.LPProblemView.as_view(), name='viewProblem')
    path('', views.getProblems, name='calculator'),
    path('all/<str:pk>/',views.getLPProblem, name='problem'),
    path('s/<str:pk>/', views.getLPProblemSolution, name='solution'),
    path('s', views.getLPProblemSolutions, name='solutions')
]