# api/urls.py
from django.urls import path
from .views import TagList, TagDetail, GameList, GameDetail, CharacterList, CharacterDetail, MechanicList, \
    MechanicDetail, UserList, UserDetail, RatingList, RatingDetail, ReviewList, ReviewDetail

urlpatterns = [
    path('tags/', TagList.as_view(), name='tag-list'),
    path('tags/<int:pk>/', TagDetail.as_view(), name='tag-detail'),
    path('games/', GameList.as_view(), name='game-list'),
    path('games/<int:pk>/', GameDetail.as_view(), name='game-detail'),
    path('characters/', CharacterList.as_view(), name='character-list'),
    path('characters/<int:pk>/', CharacterDetail.as_view(), name='character-detail'),
    path('mechanics/', MechanicList.as_view(), name='mechanic-list'),
    path('mechanics/<int:pk>/', MechanicDetail.as_view(), name='mechanic-detail'),
    path('users/', UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('ratings/', RatingList.as_view(), name='rating-list'),
    path('ratings/<int:pk>/', RatingDetail.as_view(), name='rating-detail'),
    path('reviews/', ReviewList.as_view(), name='review-list'),
    path('reviews/<int:pk>/', ReviewDetail.as_view(), name='review-detail'),
]