# api/views.py
from rest_framework import generics, filters
from rest_framework.pagination import PageNumberPagination
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Game, Character, Mechanic, Tag
from .serializers import GameSerializer, CharacterSerializer, MechanicSerializer, TagSerializer


class GamePagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class GameList(generics.ListCreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'description', 'tags__name', 'character__name', 'mechanic__name']
    pagination_class = GamePagination


class GameDetailView(generics.RetrieveAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer


class CharacterList(generics.ListAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer


class MechanicList(generics.ListAPIView):
    queryset = Mechanic.objects.all()
    serializer_class = MechanicSerializer


class TagList(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class RecommendationView(APIView):
    def post(self, request):
        """
        Retrieve game recommendations based on user preferences.

        Expected request data:
        {
            "favoriteGames": [1, 2, 3],  # List of game IDs
            "favoriteCharacters": [4, 5],  # List of character IDs
            "favoriteMechanics": [6, 7],  # List of mechanic IDs
            "favoriteTags": [8, 9, 10]  # List of tag IDs
        }

        Returns:
        List of recommended games
        """
        favorite_games = request.data.get('favoriteGames', [])
        favorite_characters = request.data.get('favoriteCharacters', [])
        favorite_mechanics = request.data.get('favoriteMechanics', [])
        favorite_tags = request.data.get('favoriteTags', [])

        # Perform recommendation logic based on user preferences
        recommended_games = self.recommend_games(favorite_games, favorite_characters, favorite_mechanics, favorite_tags)

        serializer = GameSerializer(recommended_games, many=True)
        return Response(serializer.data)

    def recommend_games(self, favorite_games, favorite_characters, favorite_mechanics, favorite_tags):
        """
        Recommend games based on user preferences.

        Args:
            favorite_games (List[int]): List of favorite game IDs
            favorite_characters (List[int]): List of favorite character IDs
            favorite_mechanics (List[int]): List of favorite mechanic IDs
            favorite_tags (List[int]): List of favorite tag IDs

        Returns:
            List[Game]: List of recommended games
        """
        # Implement your recommendation algorithm here
        # You can use the provided user preferences to filter and rank the games
        # based on the associated tags, characters, and mechanics
        # Return a list of recommended games
        pass
