import django_heroku

PROJECT_ROOT = os.path.dirname("app/django-web-app")
# Activate Django-Heroku.
django_heroku.settings(locals())
