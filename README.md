# 🧠 Mini Blog API

API REST desarrollada con **Node.js**, **Express** y **PostgreSQL** para la gestión de **autores** y **posts**.

El proyecto implementa una arquitectura por capas (routes → controllers → services), incluye documentación con Swagger y pruebas básicas.

---

## 🚀 Tecnologías

* Node.js
* Express
* PostgreSQL
* Swagger (swagger-ui-express, swagger-jsdoc)
* Jest (testing)

---

## 📦 Instalación

```bash
git clone <URL_DEL_REPOSITORIO>
cd mini-blog-api
npm install
```

---

## ⚙️ Variables de entorno

Crear un archivo `.env` en la raíz del proyecto basado en:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_password
DB_NAME=mini_blog
```

---

## 🗄️ Configuración de base de datos

1. Crear base de datos en PostgreSQL:

```sql
CREATE DATABASE mini_blog;
```

2. Ejecutar scripts SQL:

```bash
psql -U postgres -d mini_blog -f sql/schema.sql
psql -U postgres -d mini_blog -f sql/seed.sql
```

---

## ▶️ Ejecutar proyecto

```bash
npm run dev
```

Servidor disponible en:

```
http://localhost:3000
```

---

## 📚 Documentación API (Swagger)

Disponible en:

```
http://localhost:3000/api-docs
```

---

## 📄 OpenAPI

El archivo de especificación se encuentra en:

```
openapi.yaml
```

---

## 🧪 Tests

Ejecutar pruebas con:

```bash
npm test
```

---

## 📌 Endpoints principales

### 👤 Authors

* GET /authors → Obtener todos los autores
* GET /authors/{id} → Obtener autor por ID
* GET /authors/{id}/posts → Obtener posts de un autor
* POST /authors → Crear autor
* PUT /authors/{id} → Actualizar autor
* DELETE /authors/{id} → Eliminar autor

---

### 📝 Posts

* GET /posts → Obtener todos los posts
* GET /posts/{id} → Obtener post por ID
* GET /posts/author/{authorId} → Obtener posts por autor
* POST /posts → Crear post
* PUT /posts/{id} → Actualizar post
* DELETE /posts/{id} → Eliminar post

---

## 🧩 Estructura del proyecto

```
mini-blog-api/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── db/
│   └── app.js
│
├── sql/
│   ├── schema.sql
│   └── seed.sql
│
├── tests/
│   └── authors.test.js
│
├── openapi.yaml
├── .env.example
├── package.json
├── README.md
└── server.js
```

---

## 🚀 Deployment (Railway)

1. Crear proyecto en Railway
2. Conectar repositorio de GitHub
3. Configurar variables de entorno
4. Crear base de datos PostgreSQL en Railway
5. Ejecutar scripts SQL en la base remota
6. Desplegar aplicación

* Public URL: (pendiente)
* Internal DB URL: (configurada en Railway)

---

## 🤖 Uso de Inteligencia Artificial

Durante el desarrollo se utilizó inteligencia artificial (ChatGPT) como apoyo para:

* Resolución de errores
* Generación de documentación Swagger
* Mejores prácticas en estructura de proyecto
* Apoyo en la creación de README y configuración

Todo el código fue revisado, entendido y adaptado manualmente.

---

## 🎯 Funcionalidades

* CRUD completo de autores
* CRUD completo de posts
* Relación autores ↔ posts
* Documentación interactiva con Swagger
* Pruebas básicas con Jest
* Arquitectura modular y escalable

---

## 💼 Autor

Proyecto desarrollado como práctica de backend para portafolio profesional.
