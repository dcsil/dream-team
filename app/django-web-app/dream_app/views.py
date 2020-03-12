from django.shortcuts import render

from django.http import HttpResponse

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
    'public/',
]

def index(request):
    return HttpResponse("Hello, world. Welcome to Dream-app 1.0.")
