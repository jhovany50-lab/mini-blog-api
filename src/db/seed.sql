-- ======================================
-- Mini Blog API
-- Proyecto Integrador - Backend con Node.js y PostgreSQL
-- Este archivo inserta datos de ejemplo para facilitar
-- las pruebas de la API mediante Swagger, Postman o Thunder Client.
-- ======================================
-- AUTORES
-- ==========================

INSERT INTO authors (name, email, bio) VALUES
(
'Juan Pérez',
'juan.perez@email.com',
'Desarrollador Backend especializado en Node.js y PostgreSQL.'
),
(
'María López',
'maria.lopez@email.com',
'Ingeniera de software apasionada por las APIs REST y la arquitectura de software.'
),
(
'Carlos Sánchez',
'carlos.sanchez@email.com',
'Full Stack Developer con experiencia en JavaScript y bases de datos relacionales.'
),
(
'Ana García',
'ana.garcia@email.com',
'Especialista en desarrollo web con enfoque en testing y buenas prácticas.'
),
(
'Luis Hernández',
'luis.hernandez@email.com',
'Backend Developer interesado en rendimiento, escalabilidad y documentación técnica.'
);

-- ==========================
-- POSTS
-- ==========================

INSERT INTO posts (title, content, author_id, published) VALUES

-- Juan Pérez
(
'Introducción a PostgreSQL',
'PostgreSQL es un sistema gestor de bases de datos relacional de código abierto ampliamente utilizado por su estabilidad y rendimiento.',
1,
true
),
(
'Primeros pasos con Express',
'Express facilita la creación de APIs REST utilizando Node.js gracias a su estructura ligera y flexible.',
1,
true
),
(
'Buenas prácticas en Node.js',
'Separar la lógica de negocio en servicios y controladores mejora la organización y el mantenimiento del proyecto.',
1,
true
),

-- María López
(
'¿Qué es una API REST?',
'Las APIs REST permiten la comunicación entre aplicaciones mediante el protocolo HTTP utilizando recursos claramente definidos.',
2,
true
),
(
'Documentando APIs con Swagger',
'Swagger permite generar documentación interactiva para facilitar el consumo y prueba de una API.',
2,
true
),
(
'Validaciones en Express',
'Validar la información recibida evita errores y mejora la seguridad de cualquier aplicación web.',
2,
true
),

-- Carlos Sánchez
(
'Relaciones entre tablas',
'Las claves foráneas ayudan a mantener la integridad referencial entre entidades relacionadas.',
3,
true
),
(
'Consultas parametrizadas',
'El uso de parámetros en PostgreSQL previene ataques de SQL Injection y mejora la seguridad.',
3,
true
),
(
'CRUD con PostgreSQL',
'Las operaciones Create, Read, Update y Delete constituyen la base de la mayoría de las aplicaciones.',
3,
true
),

-- Ana García
(
'Testing con Jest',
'Las pruebas automatizadas permiten detectar errores antes de desplegar una aplicación.',
4,
true
),
(
'Probando APIs con Supertest',
'Supertest facilita la validación de endpoints HTTP construidos con Express.',
4,
true
),
(
'Manejo centralizado de errores',
'Un middleware de errores permite responder de forma consistente ante cualquier excepción.',
4,
true
),

-- Luis Hernández
(
'Arquitectura por capas',
'Separar rutas, controladores y servicios hace que el código sea más limpio y fácil de mantener.',
5,
true
),
(
'OpenAPI y documentación',
'Una API bien documentada facilita el trabajo de otros desarrolladores y consumidores del servicio.',
5,
true
),
(
'Preparando una API para producción',
'Implementar pruebas, validaciones y documentación incrementa la calidad y confiabilidad de un proyecto.',
5,
true
);