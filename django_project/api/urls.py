# api/urls.py
from django.urls import path
from .views import TagList, TagDetail, GameList, GameDetail, CharacterList, CharacterDetail, MechanicList, MechanicDetail

urlpatterns = [
    path('tags/', TagList.as_view(), name='tag-list'),
    path('tags/<int:pk>/', TagDetail.as_view(), name='tag-detail'),
    path('games/', GameList.as_view(), name='game-list'),
    path('games/<int:pk>/', GameDetail.as_view(), name='game-detail'),
    path('characters/', CharacterList.as_view(), name='character-list'),
    path('characters/<int:pk>/', CharacterDetail.as_view(), name='character-detail'),
    path('mechanics/', MechanicList.as_view(), name='mechanic-list'),
    path('mechanics/<int:pk>/', MechanicDetail.as_view(), name='mechanic-detail'),
]