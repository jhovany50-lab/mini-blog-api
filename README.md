# 🧠 Mini Blog API

API REST desarrollada con **Node.js**, **Express** y **PostgreSQL** para la gestión de autores y publicaciones (posts).

El proyecto implementa una arquitectura por capas, documentación interactiva con Swagger/OpenAPI, manejo centralizado de errores y pruebas automatizadas con Jest y Supertest.

---

# 📑 Tabla de contenido

- Características
- Tecnologías
- Instalación
- Variables de entorno
- Base de datos
- Ejecución
- Documentación
- Pruebas
- Endpoints
- Arquitectura
- Estructura del proyecto
- Scripts disponibles
- Uso de IA
- Autor

---

# 🚀 Características

- CRUD completo de autores
- CRUD completo de publicaciones
- Relación entre autores y publicaciones
- PostgreSQL como base de datos
- Arquitectura por capas
- Middleware para manejo centralizado de errores
- Validación de datos
- Documentación Swagger/OpenAPI
- Pruebas automatizadas con Jest + Supertest

---

# 🛠 Tecnologías

- Node.js
- Express
- PostgreSQL
- pg
- dotenv
- Swagger UI Express
- Swagger JSDoc
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
```

También se incluye un archivo `.env.example`.

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

El proyecto utiliza una arquitectura por capas.

```
Cliente

↓

Routes

↓

Controllers

↓

Services

↓

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

- Resolución de errores
- Documentación
- Revisión de arquitectura
- Mejores prácticas
- Generación de casos de prueba

Todo el código fue comprendido, revisado y adaptado manualmente antes de incorporarse al proyecto.

---

# 📌 Estado del proyecto

✅ Proyecto finalizado.

Incluye:

- CRUD completo de Authors
- CRUD completo de Posts
- Swagger
- PostgreSQL
- Arquitectura por capas
- Manejo de errores
- Validaciones
- Pruebas automatizadas

---

# 👨‍💻 Autor

**Jhovany Rodríguez**

Backend Developer (en formación)

GitHub:

https://github.com/jhovany50-lab