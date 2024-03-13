from django.shortcuts import render


def index(request):
    return render(request, 'django_project/index.html', {'main_text': 'Welcome to Game Crisis!'})
