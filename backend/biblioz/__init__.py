from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
from flask_restx import Api
from flask_cors import CORS
from flask_marshmallow import Marshmallow
import os

db = SQLAlchemy()  # Instancia de SQLAlchemy para manejar la base de datos
migrate = Migrate()  # Instancia de Migrate para manejar las migraciones de la base de datos
api = Api()  # Instancia de Api para manejar la API REST con Flask-RESTX
ma = Marshmallow()
def create_app():
    
    app = Flask(__name__)    # Crea una instancia de la aplicación Flask
    app.config.from_object(Config)  # Carga la configuración desde el objeto Config

    # Configurar CORS para la comunicacion con el frontend 
    CORS(app)  # Configura CORS (Cross-Origin Resource Sharing) para permitir solicitudes desde otros dominios


    db.init_app(app)   # Inicializa la extensión SQLAlchemy con la aplicación
    migrate.init_app(app, db) # Inicializa la extensión Migrate con la aplicación y la instancia de SQLAlchemy
    ma.init_app(app)

    # Configura Flask-RESTX para manejar las rutas y la documentación de la API
    api = Api(
        app,
        title='Biblioz',
        version='1.0',
        description='Biblioz es un recomendador de libros que proporciona información detallada sobre libros y permite realizar operaciones CRUD en la base de datos de libros.',
        doc='/docs'  # Ruta para la documentación Swagger
    )

    # Crear directorio para almacenar img de modelos si no existe
    if not os.path.exists(app.config['UPLOAD_FOLDER']):
        os.makedirs(app.config['UPLOAD_FOLDER'])

    with app.app_context():

        # Importar y registrar la ruta de resources de Flask-RESTx
        from biblioz.user.routes import api as user_api
        api.add_namespace(user_api)

        from biblioz.userProfile.routes import api as userProfile_api
        api.add_namespace(userProfile_api)

        from biblioz.book.routes import api as book_api
        api.add_namespace(book_api)

        from biblioz.author.routes import api as author_api
        api.add_namespace(author_api)

        
    return app
