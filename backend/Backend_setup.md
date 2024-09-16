# Backend Setup

### 1.-Requisitos

- **Python**: Asegúrate de tener Python instalado.
- **Pip**: Debe estar disponible para instalar dependencias.
- **Agregar la ruta de ubicación de scripts de Python al PATH**: Generalmente, esto se hace automáticamente al instalar Python.

>[!NOTE]
Por lo general, al instalar Python, pip también se instala.

### 2.-Verificar los Requisitos

Verifica las versiones instaladas para asegurarte de que los requisitos están correctamente instalados:

```sh
python --version
```
```bash
pip --version
```
### 3.-Instalación y Activación del Entorno Virtual
- a.-Instalar virtualenv:
```bash
pip install virtualenv
```
- b.-Crear un entorno virtual:
```bash
python -m venv venv
```
- c.-Activar el entorno virtual:

  → Windows:
   
  ```bash
  .\venv\Scripts\activate
  ```
  → macOS/Linux:
  
  ```bash
  source venv/bin/activate
  ```
- d.-Desactivar el entorno virtual (cuando termines de trabajar):
```bash
deactivate
```

### 4.-Dentro del Entorno Virtual (venv)
Una vez que el entorno virtual esté activado:
- Instala las dependencias del proyecto:
```bash
pip install -r requirements.txt
```
- Iniciar el repositorio de migraciones de la db(db.sqlite3):
```bash
flask db init
```
- Crear una nueva migración de los modelos:
```bash
flask db migrate -m "Poner cualquier nombre a la descripcion de la migracion"
```
- Aplicar las migraciones a la db:
```bash
flask db upgrade
```

### 5.-Iniciar el Servidor
- Activar el servidor:
```bash
flask --debug run
```
- Detener el servidor: Presiona  ```Ctrl + C```

### 6.-Acceder a la Documentación de la API
- Para ver la docs de la API, abre tu navegador web y navega a la siguiente dirección:
```bash
http://localhost:5000/docs
```
