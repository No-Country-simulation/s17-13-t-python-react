from os import environ, path
from dotenv import load_dotenv

# Obtiene el directorio base del proyecto
basedir = path.abspath(path.dirname(__file__))

# Carga las variables de entorno desde el archivo .env
load_dotenv(path.join(basedir, ".env"))

class Config:

    # Config de la base de datos en sqlite3
    SQLALCHEMY_DATABASE_URI = environ.get("SQLALCHEMY_DATABASE_URI", "sqlite:///db.sqlite3")
    SQLALCHEMY_TRACK_MODIFICATIONS = False   # Desactiva el seguimiento de modificaciones para evitar sobrecargar la memoria con cambios innecesarios

    # Config para la carga de img de los modelos
    UPLOAD_FOLDER = environ.get('UPLOAD_FOLDER', path.join(basedir, 'media'))
