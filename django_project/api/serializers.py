# api/serializers.py
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Tag, Game, Character, Mechanic, Rating, Review, User


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


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']


class RatingSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Rating
        fields = ['id', 'user', 'game', 'rating']


class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ['id', 'user', 'game', 'title', 'content', 'created_at']