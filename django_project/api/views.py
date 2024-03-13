# api/views.py
from rest_framework import generics
from .models import Tag, Game, Character, Mechanic
from .serializers import TagSerializer, GameSerializer, CharacterSerializer, MechanicSerializer


class TagList(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class TagDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class GameList(generics.ListCreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer


class GameDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer


class CharacterList(generics.ListCreateAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer


class CharacterDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer


class MechanicList(generics.ListCreateAPIView):
    queryset = Mechanic.objects.all()
    serializer_class = MechanicSerializer


class MechanicDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Mechanic.objects.all()
    serializer_class = MechanicSerializer

