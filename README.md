# 🧠 Mini Blog API

API REST profesional desarrollada con **Node.js, Express y PostgreSQL** para la gestión de autores y posts.

Incluye arquitectura por capas, documentación interactiva con Swagger y pruebas automatizadas.

---

## 🚀 Features

* CRUD completo de autores
* CRUD completo de posts
* Relación autores ↔ posts
* Documentación con Swagger UI
* Tests automatizados con Jest
* Arquitectura modular escalable

---

## 🛠️ Tecnologías

* Node.js
* Express
* PostgreSQL
* Swagger (swagger-ui-express, swagger-jsdoc)
* Jest + Supertest

---

## 📦 Instalación

```bash
git clone https://github.com/jhovany50-lab/mini-blog-api.git
cd mini-blog-api
npm install
```

---

## ⚙️ Variables de entorno

Crear archivo `.env`:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_password
DB_NAME=mini_blog
```

---

## 🗄️ Base de datos

```sql
CREATE DATABASE mini_blog;
```

```bash
psql -U postgres -d mini_blog -f sql/schema.sql
psql -U postgres -d mini_blog -f sql/seed.sql
```

---

## ▶️ Ejecutar proyecto

```bash
npm run dev
```

👉 API disponible en:
http://localhost:3000

---

## 📚 Documentación (Swagger)

http://localhost:3000/api-docs

---

## 🧪 Tests

```bash
npm test
```

---

## 📌 Endpoints principales

### 👤 Authors

* GET /authors
* GET /authors/{id}
* GET /authors/{id}/posts
* POST /authors
* PUT /authors/{id}
* DELETE /authors/{id}

### 📝 Posts

* GET /posts
* GET /posts/{id}
* GET /posts/author/{authorId}
* POST /posts
* PUT /posts/{id}
* DELETE /posts/{id}

---

## 🧩 Arquitectura

```
src/
├── controllers/
├── routes/
├── services/
├── db/
└── app.js
```

---

## 🚀 Deployment

Pendiente (Railway / Render)

---

## 🤖 Uso de IA

Se utilizó ChatGPT como apoyo para:

* Resolución de errores
* Generación de documentación
* Mejores prácticas

El código fue comprendido y adaptado manualmente.

---

## 💼 Autor

Jhovany Rodríguez
Backend Developer (en formación)

