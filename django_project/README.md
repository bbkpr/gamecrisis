## Setting up Digital Ocean
* Create a Digital Ocean droplet [using the `Django` template](https://marketplace.digitalocean.com/apps/django#getting-started) and SSH as `root` (or if you find it easier, you can use their web console to emulate an SSH terminal, it works fairly well).
* Log
* `nano /root/.digitalocean_passwords`, update the values of:
  * `DJANGO_POSTGRES_PASS`: Set this to the same as the `DB_PASSWORD` you will set up in `/home/django/.profile` later in the document, under **Deploying to Production**.
  * `SECRET_KEY` and `DJANGO_SECRET_KEY`: Generate a secure string, 32 characters or longer.
  * 
## Getting Started with Local Development
* Copy `docker-compose.yml.example` to `docker-compose.yml` and set `POSTGRES_PASSWORD`
* Copy `.env.example` to `.env` and fill in your values
* In the root dir:
  * `docker compose up -d`: starts Postgres (you must have Docker Desktop installed)
  * `pip install -r requirements.txt`: Installs required libraries
  * `python manage.py migrate`: Runs DB Migrations
  * `python manage.py createsuperuser`: Make sure to fill out and record the info
  * `python manage.py runserver`: Starts the Dev server.
* Go to http://localhost:8000
  * Go to http://localhost:8000/admin and log in with the admin user from `createsuperuser`

## Deploying to Production
* Edit `/home/django/.profile` and set production values for the same environment variables as found in `.env`, but with `export ` in front of it e.g. `export DB_NAME=django`
* (TODO) Collect static assets which are split depending on whether running in Dev or Production mode.
* `chown -R django:django /home/django/django_project/` and `chmod -R 755 /home/django/django_project/`
  * If you're having issues uploading or changing files via SFTP, re-run this.
* SFTP to `/home/django/django_project` on Production
* If you changed dependencies in `requirements.txt`, run `pip install -r requirements.txt`
* Restart gunicorn whenever you change code: `PID=$(systemctl show --value -p MainPID gunicorn.service) && kill -HUP $PID`
