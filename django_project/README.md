## Getting Started with Local Development
* Copy `docker-compose.yml.example` to `docker-compose.yml` and set `POSTGRES_PASSWORD`
* Copy `.env.example` to `.env` and fill in your values
* In the root dir:
  * `docker compose up -d` to start Postgres
  * `pip install -r requirements.txt`
  * `python manage.py runserver`
* Go to http://localhost:8000

## Deploying to Production
