# api/models.py
from django.db import models
from django.contrib.auth.models import User


class Tag(models.Model):
    name = models.CharField(max_length=100)
    weight = models.IntegerField(default=1)

    def __str__(self):
        return self.name

    @property
    def related_games(self):
        return self.game_set.all()

    @property
    def related_characters(self):
        return self.character_set.all()

    @property
    def related_mechanics(self):
        return self.mechanic_set.all()


class Game(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    tags = models.ManyToManyField(Tag)
    related_games = models.ManyToManyField('self', blank=True)

    def __str__(self):
        return self.title

    @property
    def related_characters(self):
        return self.character_set.all()

    @property
    def related_mechanics(self):
        return self.mechanic_set.all()


class Character(models.Model):
    name = models.CharField(max_length=100)
    games = models.ManyToManyField(Game)
    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return self.name


class Mechanic(models.Model):
    name = models.CharField(max_length=100)
    games = models.ManyToManyField(Game)
    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return self.name


class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    rating = models.IntegerField()

    def __str__(self):
        return f"{self.user.username} - {self.game.title}: {self.rating}"


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.game.title}: {self.title}"
