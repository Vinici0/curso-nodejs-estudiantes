![CRUD](https://res.cloudinary.com/dmkvix7ds/image/upload/v1694422684/Screenshot_130_eoj80b.png)

![HTTP](https://res.cloudinary.com/dmkvix7ds/image/upload/v1694422684/Screenshot_129_dzn3a0.png)


## Mongoose CRUD (Create, Read, Update, Delete)

NameModel.find() // Devuelve todos los documentos de la colección
NameModel.findById(id) // Devuelve un documento por id
NameModel.save() // Inserta y actualiza documentos
NameModel.remove() // Elimina documentos
NameModel.findByIdAndUpdate() // Actualiza un documento por id

## MPER
1. Preparar el entorno de desarrollo para trabajar con MongoDB, Express


Tareas a realizar:
Trabajar en la sesión 3 y 4
1. Ubicar todos los colbacks en la carpeta de controllers 
2. Ejecutar el servidor y probar las rutas con Postman
3. Crear un editar el modelo de datos para que tenga los siguientes campos:
    - Nombre
    - Descripción
4. Crear un nuevo controlador prodcuto para el modelo de datos 
    - GET /api/productos
    - GET /api/productos/:id
    - POST /api/productos
    - PUT /api/productos/:id
    - DELETE /api/productos/:id

5. Probar las rutas con Postman
6. Crear una base de datos en MongoDB Compass llamada "tienda"
