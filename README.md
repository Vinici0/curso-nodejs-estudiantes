# ¿Qué veremos en esta sección?
### Resumen
En este tutorial, aprendiste lo siguiente:

- Qué es Node.js
- Qué es Express
- Cómo instalar Node.js y Express
- Cómo crear una aplicación Express
- Cómo utilizar el enrutamiento
- Cómo agregar código
- Lanzar la aplicación a producción con ayuda Railway

# Introducción a Node.js y Express

En este documento se presenta una introducción a Node.js y Express, un framework web para Node.js.

## ¿Qué es Node.js?

Node.js es un entorno de ejecución JavaScript de código abierto, multiplataforma, que permite a los desarrolladores crear aplicaciones web y de servidor en JavaScript.

## ¿Qué es Express?

Express es un framework web ligero y flexible para Node.js. Se utiliza para crear aplicaciones web, API y aplicaciones móviles.

## Requisitos

Para seguir este tutorial, necesitarás lo siguiente:

* Un editor de texto o IDE
* Node.js instalado

## Instalación de Node.js

Puedes instalar Node.js desde el sitio web oficial: https://nodejs.org/en/

## Creando un proyecto Node.js

Para crear un proyecto Node.js, crea una carpeta para tu proyecto y luego ejecuta el siguiente comando:

```
    npm init
```

Este comando creará un archivo `package.json` para tu proyecto.

## Instalando Express

Para instalar Express, ejecuta el siguiente comando:

```
    npm install express --save
```

Este comando instalará el módulo express en tu proyecto.

Creando una aplicación Express
Para crear una aplicación Express, crea un archivo index.js en tu proyecto y agrega el siguiente código:

```
const express = require('express');

const app = express();

app.get('/', (req, res) => {
res.send('Hola, mundo!');
});

app.listen(3000, () => {
console.log('Servidor iniciado en http://localhost:3000');
});
```

Este código creará una aplicación Express simple que responde a las solicitudes GET a la raíz del sitio con la respuesta "Hola, mundo!".

## Ejecutando la aplicación
Para ejecutar la aplicación, abre una terminal en el directorio de tu proyecto y ejecuta el siguiente comando:

```
    node index.js
```

Este comando iniciará el servidor web Express en el puerto 3000. Puedes acceder a la aplicación en http://localhost:3000.

## Enrutamiento
Express utiliza el enrutamiento para mapear las solicitudes HTTP a las funciones de la aplicación. Para crear una ruta, utiliza el método app.get(), app.post(), app.put() o app.delete().

Por ejemplo, el siguiente código crea una ruta que responde a las solicitudes GET a la ruta /api/users:

```
    app.get('/api/users', (req, res) => {
    // ...
    });
```
### Contacto
Si tienes alguna pregunta o comentario sobre este proyecto, no dudes en contactarme a través de mi perfil de [LinkedIn](https://www.linkedin.com/in/vinicio-borja/).<br><br>
