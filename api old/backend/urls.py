"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views.skins import get_skins
from .views.agents import get_agents
from .views.containers import get_containers

urlpatterns = [
    path('skins/<category>/', get_skins, name='get_skins_by_category'),
    path('skins/<category>/<skin_type>/', get_skins, name='get_specific_skins'),
    path('agents/', get_agents, name='get_agents'),
    path('containers/', get_containers, name='get_containers')
]

