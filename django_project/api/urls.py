# api/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('games/', views.GameList.as_view(), name='game-list'),
    path('games/<int:pk>/', views.GameDetailView.as_view(), name='game-detail'),
    path('characters/', views.CharacterList.as_view(), name='character-list'),
    path('mechanics/', views.MechanicList.as_view(), name='mechanic-list'),
    path('tags/', views.TagList.as_view(), name='tag-list'),
    path('recommendations/', views.RecommendationView.as_view(), name='recommendation'),
]
