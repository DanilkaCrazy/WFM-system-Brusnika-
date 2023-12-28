from django.urls import path
from . import views

urlpatterns = [
	path('', views.LPProblemCreate.as_view(), name='calculator'),
    path('v', views.LPProblemView.as_view(), name='calculator'),
    #path('problem', views.LPProblemView.as_view(), name='viewProblem')
]