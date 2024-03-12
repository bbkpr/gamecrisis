## Overview
Game Crisis (`gamecrisis`) is a web application that helps gamers find their next favorite game! There are so many amazing video games, tabletop games, RPG rule sets, etc. being released and updated every day that it's nearly impossible to keep up. You can read as many reviews as you like, but you won't be able to tell whether part or all of it will truly click with you.

The application is written in Python and Django, with a more advanced React UI coming soon.

## Setting up Digital Ocean
* Create a Digital Ocean droplet [using the `Django` template](https://marketplace.digitalocean.com/apps/django#getting-started) and SSH as `root` (or if you find it easier, you can use their web console to emulate an SSH terminal, it works fairly well).
  * Configure your domain through your registrar, adding an A record pointing to your Digital Ocean Droplet's public IP.
  * Go through the Django template's instructions, including setting up SSL with certbot.
* `nano /etc/nginx/sites-available/default`, update:
  * Set `server_name` to `yourdomain.tld www.yourdomain.tld`
  * Change the alias under `location /static` to `alias /home/django/django_project/django_project/staticfiles;`. This is due to the usage of `collectstatic` (documented under "Deploying to Production")
* `nano /root/.digitalocean_passwords`, update the values of:
  * `DJANGO_POSTGRES_PASS`: Set this to the same as the `DB_PASSWORD` you will set up in `/home/django/.profile` later in the document, under **Deploying to Production**.
  * `SECRET_KEY` and `DJANGO_SECRET_KEY`: Generate a secure string, 32 characters or longer.
* `nano ~/.bashrc`. Add the aliases `alias restartgu='PID=$(systemctl show --value -p MainPID gunicorn.service) && kill -HUP $PID'` and `alias restartng='systemctl restart nginx.service'`, which allow you to conveniently restart gunicorn and nginx, respectively.


## Getting Started with Local Development
* Copy `docker-compose.yml.example` to `docker-compose.yml` and set `POSTGRES_PASSWORD`
* Copy `.env.example` to `.env` and fill in your values
* In the root dir:
  * `docker compose up -d`: starts Postgres (you must have Docker Desktop installed)
  * `pip install -r requirements.txt`: Installs required libraries
  * `python manage.py migrate`: Runs DB Migrations
  * `python manage.py createsuperuser`: Make sure to fill out and record the info
  * `python manage.py runserver`: Starts the Dev server.
* Go to the app at http://localhost:8000 and the admin at http://localhost:8000/admin, where you can log in with the admin user from `createsuperuser`
* Whenever you change dependencies in `requirements.txt`, run `pip install -r requirements.txt`


## Deploying to Production
* Edit `/home/django/.profile` if needed and set production values for the same environment variables as found in `.env`, but with `export ` in front of it e.g. `export DB_NAME=django`
* `python manage.py collectstatic`. This gathers up static files from the project, including those from packages like the Django Admin, for deployment to production. See `settings.py` and reference `STATICFILES_DIRS` and `STATIC_ROOT` to see how this is configured.
* `chown -R django:django /home/django/django_project/` and `chmod -R 755 /home/django/django_project/`
  * If you're having issues uploading or changing files via SFTP, re-run this.
* SFTP to `/home/django/django_project` on your Digital Ocean Droplet and upload relevant files.
* Whenever you change dependencies in `requirements.txt`, run `pip install -r requirements.txt`
* Restart gunicorn whenever you change code: `restartgu` or `PID=$(systemctl show --value -p MainPID gunicorn.service) && kill -HUP $PID`
* Restart nginx whenever you change its config: `restartng` or `systemctl restart nginx.service`
