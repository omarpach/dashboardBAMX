# Descripción
El proyecto consiste en una pagina web desarrollada utilizando Node.js, CSS y MySQL, lo cual permite a los usuarios poder iniciar sesión, asi como registrarse, una iniciado sesión
el usuario podrá acceder a un dashboard en base a la bsae de datos, actualmente la base de datos utilizada es la cantidad de productos alimenticios producidos por país.

# Características
- El inicio de sesión se hace validando las credenciales que existan en una base de datos
- Todos los usuarios se guardan en esta base de datos, y esta base de datos se puede manipular atraves de la aplicación
- Las páginas son seguras, es decir, se necesita haber iniciado sesión para poder entrar, de otra manera, te regresará a que inicies sesión

### Objetivo General:
D
### Integrantes
 - [Braulio Sanchez](https://github.com/alesanchezb)
 - [Omar Pacheco](https://github.com/omarpach) 
 - [Ana Sofia Matti](https://github.com/venusielo) 
 - [Luis Mario Sainz](https://github.com/churroxd8) 
 - [David Ayala](https://github.com/jdayala111) 
 - [Daniel Alvarez](https://github.com/danuelalvarezt6) 
 - [Alfredo Arreola](https://github.com/curtax)

# Instalación

### Clonar el repositorio
```
git clone git@github.com:los-hambriados/banmx.git
```

### Configurar servidor de Node.js
Se debe iniciar en la carpeta a la que se clono un servidor Node.js, y se deben descargar todas las dependencias (express, mySQL, passport, etc.).

### Tener capacidad de crear e importar bases de datos en mySQL
Se debe tener a la vez software necesario para tener bases de datos de mySQL, ya sea el mismo mySQL o uno como XAMPP. Se deben de importar las bases de datos contenidas en la carpeta databases a la base de datos de mySQL.

### Iniciar el proyecto

Con todo listo se debe iniciar la base de datos en la que se tienen guardadas tanto nodejs-users como pokemon_data. Se inicia el servidor con el comando "npm run devStart", y en el navegador se abre el link localhost:300. Una vez todo esto este listo de debera ver la pagina.
