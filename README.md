# 🧠 Mini Blog API

API REST desarrollada con **Node.js**, **Express** y **PostgreSQL** para la gestión de autores y publicaciones (posts).

Implementa una arquitectura por capas, documentación interactiva con Swagger/OpenAPI, manejo centralizado de errores, validaciones, pruebas automatizadas y despliegue en producción mediante Render.

![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-336791?logo=postgresql&logoColor=white)
![OpenAPI](https://img.shields.io/badge/OpenAPI-3.0-6BA539?logo=swagger&logoColor=white)
![Render](https://img.shields.io/badge/Deploy-Render-46E3B7?logo=render&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

# 🚀 Demo

### API en producción

https://mini-blog-api-li5g.onrender.com

### Documentación Swagger

https://mini-blog-api-li5g.onrender.com/api-docs

---

# 📑 Tabla de contenido

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Variables de entorno](#-variables-de-entorno)
- [Base de datos](#-base-de-datos)
- [Ejecución](#-ejecutar-el-proyecto)
- [Documentación Swagger](#-documentación-swagger)
- [Pruebas](#-ejecutar-pruebas)
- [Endpoints](#-endpoints)
- [Arquitectura](#-arquitectura)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Scripts disponibles](#-scripts-disponibles)
- [Uso de IA](#-uso-de-ia)
- [Estado del proyecto](#-estado-del-proyecto)
- [Autor](#-autor)

---

# 🚀 Características

- CRUD completo de autores.
- CRUD completo de publicaciones.
- Relación entre autores y publicaciones.
- PostgreSQL como base de datos relacional.
- Arquitectura por capas.
- Middleware para manejo centralizado de errores.
- Validación de datos.
- Documentación interactiva con Swagger/OpenAPI.
- Pruebas automatizadas con Jest y Supertest.
- Despliegue en producción mediante Render.

---

# 🛠 Tecnologías

- Node.js
- Express
- PostgreSQL
- pg
- dotenv
- Swagger UI Express
- YAMLJS
- Jest
- Supertest

---

# 📦 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/jhovany50-lab/mini-blog-api.git

cd mini-blog-api

npm install
```

---

# ⚙ Variables de entorno

Crear un archivo `.env` en la raíz del proyecto.

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_password
DB_NAME=mini_blog

DATABASE_URL=
```

También se incluye un archivo `.env.example`.

Cuando la variable `DATABASE_URL` está definida, la aplicación se conecta automáticamente a la base de datos de producción (Render).

---

# 🗄 Base de datos

Crear la base de datos:

```sql
CREATE DATABASE mini_blog;
```

Ejecutar los scripts SQL:

```bash
psql -U postgres -d mini_blog -f src/db/schema.sql

psql -U postgres -d mini_blog -f src/db/seed.sql
```

---

# ▶ Ejecutar el proyecto

Modo desarrollo

```bash
npm run dev
```

Modo producción

```bash
npm start
```

La API estará disponible en:

```
http://localhost:3000
```

---

# 🌐 Producción

La aplicación también se encuentra desplegada en Render.

API

```
https://mini-blog-api-li5g.onrender.com
```

Swagger

```
https://mini-blog-api-li5g.onrender.com/api-docs
```

---

# 📚 Documentación Swagger

Una vez iniciado el servidor:

```
http://localhost:3000/api-docs
```

---

# 🧪 Ejecutar pruebas

```bash
npm test
```

Actualmente el proyecto cuenta con pruebas automatizadas para:

- Authors
- Posts

---

# 📌 Endpoints

## Authors

| Método | Endpoint |
|---------|----------|
| GET | /authors |
| GET | /authors/:id |
| GET | /authors/:id/posts |
| POST | /authors |
| PUT | /authors/:id |
| DELETE | /authors/:id |

---

## Posts

| Método | Endpoint |
|---------|----------|
| GET | /posts |
| GET | /posts/:id |
| GET | /posts/author/:authorId |
| POST | /posts |
| PUT | /posts/:id |
| DELETE | /posts/:id |

---

# 🏗 Arquitectura

El proyecto sigue una arquitectura por capas.

```
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
```

---

# 📁 Estructura del proyecto

```
mini-blog-api/

├── src/
│   ├── controllers/
│   ├── db/
│   │   ├── index.js
│   │   ├── schema.sql
│   │   └── seed.sql
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── app.js
│
├── tests/
│   ├── authors.test.js
│   └── posts.test.js
│
├── openapi.yaml
├── server.js
├── package.json
├── .env.example
└── README.md
```

---

# 📜 Scripts disponibles

```bash
npm run dev
```

Inicia el servidor con Nodemon.

```bash
npm start
```

Inicia el servidor en modo producción.

```bash
npm test
```

Ejecuta todas las pruebas automatizadas.

---

# 🤖 Uso de IA

Durante el desarrollo se utilizó ChatGPT como herramienta de apoyo para:

- Resolución de errores.
- Revisión de arquitectura.
- Documentación.
- Mejores prácticas.
- Generación de casos de prueba.

Todo el código fue comprendido, revisado y adaptado manualmente antes de incorporarse al proyecto.

---

# 📌 Estado del proyecto

✅ Versión estable **v1.0.0**

Incluye:

- CRUD completo de Authors.
- CRUD completo de Posts.
- PostgreSQL.
- Swagger/OpenAPI.
- Arquitectura por capas.
- Validaciones.
- Manejo centralizado de errores.
- Pruebas automatizadas.
- Despliegue en Render.

---

# 📄 Licencia

Este proyecto fue desarrollado con fines educativos y de aprendizaje.

---

# 👨‍💻 Autor

**Jhovany Rodríguez**

Backend Developer (en formación)

GitHub

https://github.com/jhovany50-lab