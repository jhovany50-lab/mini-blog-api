🧠 Mini Blog API

API REST desarrollada con Node.js, Express y PostgreSQL para la gestión de autores y publicaciones (posts).

El proyecto implementa una arquitectura por capas, documentación interactiva con Swagger/OpenAPI, validaciones, manejo centralizado de errores, pruebas automatizadas y configuración para despliegue en producción.

🚀 Demo

API en producción

El deployment oficial para evaluación se realizará mediante Railway.

URL de producción: pendiente de configurar.

Documentación Swagger

URL de Swagger en producción: pendiente de configurar.

📑 Tabla de contenido

Características

Tecnologías

Instalación

Variables de entorno

Base de datos

Ejecutar el proyecto

Documentación Swagger

Pruebas

Endpoints

Arquitectura

Estructura del proyecto

Scripts disponibles

Deployment

Uso de IA

Estado del proyecto

Licencia

Autor

🚀 Características

CRUD completo de autores.

CRUD completo de publicaciones.

Relación entre autores y publicaciones.

PostgreSQL como base de datos relacional.

Arquitectura por capas.

Middleware para manejo centralizado de errores.

Validación de datos.

Manejo de errores HTTP.

Documentación interactiva con Swagger/OpenAPI.

Pruebas automatizadas con Vitest y Supertest.

Configuración independiente para Vitest.

Configuración para entorno local y producción.

Soporte para conexión mediante DATABASE_URL.

Despliegue en producción.

🛠 Tecnologías

Node.js

Express

PostgreSQL

pg

dotenv

Swagger UI Express

Swagger JSDoc

YAMLJS

Vitest

Supertest

Nodemon

📦 Instalación

1. Clonar el repositorio

git clone https://github.com/jhovany50-lab/mini-blog-api.git

2. Entrar al proyecto

cd mini-blog-api

3. Instalar las dependencias

npm install

⚙️ Variables de entorno

Crear un archivo .env en la raíz del proyecto.

Para desarrollo local se pueden utilizar las variables individuales de PostgreSQL:

PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_password
DB_NAME=mini_blog

DATABASE_URL=

También se incluye un archivo .env.example como referencia para configurar el entorno.

Conexión mediante DATABASE_URL

Cuando DATABASE_URL está definida, la aplicación utiliza esta variable para establecer la conexión con PostgreSQL.

Esto permite utilizar una única cadena de conexión en servicios de despliegue como Railway.

Cuando DATABASE_URL no está definida, la aplicación utiliza las variables individuales:

DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
DB_NAME

🗄️ Base de datos

El proyecto utiliza PostgreSQL como sistema de gestión de base de datos.

Crear la base de datos

CREATE DATABASE mini_blog;

Crear las tablas

El esquema se encuentra en:

sql/schema.sql

Ejecutar:

psql -U postgres -d mini_blog -f sql/schema.sql

Cargar datos iniciales

Los datos de prueba se encuentran en:

sql/seed.sql

Ejecutar:

psql -U postgres -d mini_blog -f sql/seed.sql

Relación entre las entidades

El modelo utiliza una relación uno a muchos (1):

Authors
   │
   │ 1
   │
   └──────────< Posts
                  N

Cada publicación pertenece a un autor mediante la clave foránea author_id.

El esquema incluye restricciones como:

Primary Key.

Foreign Key.

NOT NULL.

UNIQUE.

Relación entre autores y publicaciones.

▶️ Ejecutar el proyecto

Modo desarrollo

npm run dev

Inicia el servidor utilizando Nodemon.

Modo producción

npm start

La API estará disponible localmente en:

http://localhost:3000

📚 Documentación Swagger

La documentación interactiva está disponible localmente en:

http://localhost:3000/api-docs

La especificación OpenAPI se encuentra en:

openapi.yaml

Swagger permite consultar y probar los endpoints disponibles de la API.

🧪 Ejecutar pruebas

El proyecto utiliza Vitest y Supertest.

Todas las pruebas

npm test

Modo watch

npm run test:watch

Las pruebas se encuentran en:

tests/
├── authors.test.js
└── posts.test.js

Actualmente el proyecto cuenta con:

10 pruebas para Authors

12 pruebas para Posts

22 pruebas automatizadas en total

Las pruebas cubren operaciones CRUD y casos de error, incluyendo:

Obtener recursos.

Crear recursos.

Actualizar recursos.

Eliminar recursos.

Campos obligatorios.

Recursos inexistentes.

Emails duplicados.

Autores inexistentes.

Respuestas HTTP esperadas.

La configuración de Vitest se encuentra en:

vitest.config.js

📌 Endpoints

Authors

Método

Endpoint

Descripción

GET

/authors

Obtener todos los autores

GET

/authors/:id

Obtener un autor por ID

GET

/authors/:id/posts

Obtener publicaciones de un autor

POST

/authors

Crear un nuevo autor

PUT

/authors/:id

Actualizar un autor

DELETE

/authors/:id

Eliminar un autor

Posts

Método

Endpoint

Descripción

GET

/posts

Obtener todas las publicaciones

GET

/posts/:id

Obtener una publicación por ID

GET

/posts/author/:authorId

Obtener publicaciones de un autor

POST

/posts

Crear una nueva publicación

PUT

/posts/:id

Actualizar una publicación

DELETE

/posts/:id

Eliminar una publicación

🏗️ Arquitectura

El proyecto utiliza una arquitectura por capas para separar responsabilidades y facilitar el mantenimiento.

Cliente
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
PostgreSQL

Routes

Define los endpoints y dirige las solicitudes hacia los controllers.

Controllers

Gestiona las solicitudes HTTP y respuestas. Utiliza async/await y try/catch para enviar errores al middleware global mediante next(error).

Services

Contiene la lógica de las operaciones sobre autores y publicaciones y la interacción con PostgreSQL.

Config

La conexión con PostgreSQL está centralizada en:

src/config/db.js

Se utiliza Pool de PostgreSQL para gestionar las conexiones.

Middlewares

El manejo centralizado de errores se encuentra en:

src/middlewares/errorHandler.js

📁 Estructura del proyecto

mini-blog-api/
│
├── sql/
│   ├── schema.sql
│   └── seed.sql
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── docs/
│   │   └── swagger.js
│   ├── middlewares/
│   │   └── errorHandler.js
│   ├── routes/
│   │   ├── authorsRoutes.js
│   │   ├── postsRoutes.js
│   │   └── index.js
│   ├── services/
│   │   ├── authors.service.js
│   │   └── posts.service.js
│   └── app.js
│
├── tests/
│   ├── authors.test.js
│   └── posts.test.js
│
├── openapi.yaml
├── server.js
├── vitest.config.js
├── package.json
├── package-lock.json
├── .env.example
├── .gitignore
└── README.md

El archivo .env contiene información sensible y no debe subirse al repositorio. Se proporciona .env.example como referencia.

📜 Scripts disponibles

Desarrollo

npm run dev

Inicia el servidor con Nodemon.

Producción

npm start

Inicia el servidor con Node.js.

Pruebas

npm test

Ejecuta todas las pruebas automatizadas.

Pruebas en modo watch

npm run test:watch

Ejecuta Vitest en modo observación y vuelve a ejecutar las pruebas cuando detecta cambios.

🌐 Deployment

El proyecto será desplegado en Railway para el entorno de producción, de acuerdo con los requerimientos del proyecto.

La aplicación utiliza DATABASE_URL para facilitar la conexión con la base de datos PostgreSQL del servicio de hosting.

API en producción

URL de Railway: pendiente de configurar.

Swagger en producción

URL de Swagger: pendiente de configurar.

Una vez realizado y verificado el deployment, las URLs serán actualizadas en esta sección.

🤖 Uso de IA

Durante el desarrollo se utilizó ChatGPT como herramienta de apoyo para:

Resolución de errores.

Revisión de arquitectura.

Documentación.

Mejores prácticas.

Generación y revisión de casos de prueba.

Análisis de estructura del proyecto.

Todo el código fue comprendido, revisado y adaptado manualmente antes de incorporarse al proyecto.

📌 Estado del proyecto

✅ Versión estable v1.0.0

Incluye:

CRUD completo de Authors.

CRUD completo de Posts.

Relación entre Authors y Posts.

PostgreSQL.

Pool de conexiones.

Arquitectura por capas.

Validaciones.

Manejo centralizado de errores.

Swagger/OpenAPI.

22 pruebas automatizadas.

Vitest.

Supertest.

Configuración de Vitest.

Variables de entorno para desarrollo y producción.

Scripts SQL de configuración y datos iniciales.

Deployment preparado para Railway.

📄 Licencia

Este proyecto fue desarrollado con fines educativos y de aprendizaje.

👨‍💻 Autor

Jhovany Rodríguez

Backend Developer (en formación)

GitHub:

https://github.com/jhovany50-lab