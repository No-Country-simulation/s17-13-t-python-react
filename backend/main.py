from biblioz import create_app


# Crea una instancia de la aplicación Flask usando la configuración definida en create_app
app = create_app()

# Verifica si este archivo es el programa principal que se está ejecutando
if __name__ == "__main__":
        # Ejecuta el servidor de desarrollo de Flask
    app.run(debug=True)