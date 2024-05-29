# Descripción
El proyecto consiste en una pagina web desarrollada utilizando Node.js, CSS y MySQL, lo cual permite a los usuarios poder iniciar sesión, asi como registrarse, una iniciado sesión
el usuario podrá acceder a un dashboard en base a la bsae de datos, actualmente la base de datos utilizada es la cantidad de productos alimenticios producidos por país.

# Características
- El inicio de sesión se hace validando las credenciales que existan en una base de datos
- Todos los usuarios se guardan en esta base de datos, y esta base de datos se puede manipular atraves de la aplicación
- Las páginas son seguras, es decir, se necesita haber iniciado sesión para poder entrar, de otra manera, te regresará a que inicies sesión

### Objetivo General:
Desarrollar un software que haga uso de bases de datos para almacenar informacion de registro de usuario, asi como extraer informacion de las mismas y presentarla en un dashboard.

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
```
cd banmx
npm i express morgan mysql express-myconnection
```

### Inicia la base de datos
- Solo la primera vez:
```
mysql -u root -p -e "CREATE DATABASE [nombre_base_datos];" 
```
- Siempre:
```
mysql -u root -p [nombre_base_datos] < database/db.sql                                   
```

### Iniciar el proyecto
Para iniciar el proyecto localmente:
```
npm run dev                                 
```
