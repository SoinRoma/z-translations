<h1 align="center">Z - Translations</h1>

## Описание
Одностраничный сайт для компании Z - Translations, которые делают письменный и устный перевод на различные языки

### Используемые технологии
![HTML5](https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5&logoColor=html)
![CSS3](https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3&logoColor=css3)
![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
![Python](https://img.shields.io/badge/-Python-black?style=flat-square&logo=python)
![Django](https://img.shields.io/badge/-Django-black?style=flat-square&logo=django)

### Используемые плагины/библиотеки
![JQuery](https://img.shields.io/badge/-JQuery-black?style=flat-square&logo=jquery&logoColor=jquery)
![Splide](https://img.shields.io/badge/-Splide-black?style=flat-square&logo=carousel&logoColor=splide.js)

### Запуск проекта для Windows

1-Запустить проект в IDE (PyCharm)

2 - Создать виртуальное окружение (venv). IDE предложит сама.
```
python -m venv ./venv
```
3 - Активировать (venv)
```
venv\Scripts\activate.bat
```
4 - Установить все зависимости и плагины из requirements.txt
```
pip install -r requirements.txt
```
5 - Создать .env файл
```
copy example.env .env
```
6 - Сделать миграции
```
python manage.py makemigrations
```
```
python manage.py migrate
```
7 - Запустить сервер
```
python manage.py runserver
```
