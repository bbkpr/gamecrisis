# api/models.py
from django.db import models


class Tag(models.Model):
    name = models.CharField(max_length=100)
    weight = models.IntegerField(default=1)

    def __str__(self):
        return self.name


class Game(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    tags = models.ManyToManyField(Tag)
    related_games = models.ManyToManyField('self', blank=True)

    def __str__(self):
        return self.title


class Character(models.Model):
    name = models.CharField(max_length=100)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return self.name


class Mechanic(models.Model):
    name = models.CharField(max_length=100)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return self.name
