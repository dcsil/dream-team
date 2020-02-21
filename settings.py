import django_heroku

ALLOWED_HOSTS = ['.herokuapp.com', 'localhost', '127.0.0.1']
PROJECT_ROOT = os.path.dirname("app/django-web-app")
# Activate Django-Heroku.
django_heroku.settings(locals())
