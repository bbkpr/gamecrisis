# api/serializers.py
from rest_framework import serializers
from .models import Tag, Game, Character, Mechanic


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name', 'weight', 'related_games', 'related_characters', 'related_mechanics']


class GameSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    related_games = serializers.PrimaryKeyRelatedField(many=True, queryset=Game.objects.all())

    class Meta:
        model = Game
        fields = ['id', 'title', 'description', 'tags', 'related_games', 'related_characters', 'related_mechanics']


class CharacterSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)

    class Meta:
        model = Character
        fields = ['id', 'name', 'games', 'tags']


class MechanicSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)

    class Meta:
        model = Mechanic
        fields = ['id', 'name', 'games', 'tags']