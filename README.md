# loteria-api
API creada para mi proyecto final de ciclo. Esta API va ligada junto con la aplicación Android. Fue creada para la posible interacción entre la aplicación y la base de datos.

En este proyecto se ha usado NodeJS junto con Express para crear las consultas. Tambíen se han usado otros frameworks como nodemon, babel etc...

Las funcionalidades creadas hasta la fecha son las siguientes:
- Edpoint de regsitro de usuario
- Endpoint de inicio de sesión de usuario
- Endpoint de creación de apuesta
- Endpoint de consulta de apuestas asociadas a un usuario.

Para arrancar la API correctamente se deberán seguir los siguientes pasos:
- instalar NodeJS y Docker Desktop (o similar dependiendo su S.O)
- "npm install" en la terminal de visual studio code para instalar las dependencias
- Tener docker desktop abierto y ejecutándose
- "npm run db:up" para crear el contenedor de docker con la base de dato
- "npm run dev" para iniciar la API.

Nota asignada por el centro de estudios: Sobresaliente
