-- -- COMIENZO DEL FICHERO .sql --
 
-- -- He creado una estructura de tablas relacionales para ver el ejemplo funcionamiento
-- -- en MYSQL y para realizar consultas en 2 tablas.
-- -- La cuota figura en la tabla cuotas relacionada con la tabla socios gracias a InnoDB.
 
-- -- ZONA DE DEFINICION 
 
-- DROP DATABASE IF EXISTS mi_club;
-- CREATE DATABASE mi_club;
-- USE mi_club;

-- CREATE TABLE socios
-- (
-- id_socio INT NOT NULL AUTO_INCREMENT,
-- nombre VARCHAR(15),
-- apellidos VARCHAR(25),
-- dni VARCHAR(9),
-- domicilio VARCHAR(50),
-- localidad VARCHAR(30),
-- tipo_socio ENUM('A','B','C'),
-- fecha_alta DATE,
-- fecha_baja DATE,
-- correo VARCHAR(50),
-- contrasena VARCHAR(50),
-- paga_ult_recibo SET ('S','N'),
-- anotaciones BLOB,
-- PRIMARY KEY (id_socio)
-- ) ENGINE=InnoDB;

-- ALTER TABLE socios
-- ADD INDEX dni(dni),
-- ADD INDEX apellidos(apellidos);

-- CREATE TABLE cuotas
-- (
-- id_cuota INT NOT NULL AUTO_INCREMENT ,
-- id_socio INT,
-- fecha_pago DATE,
-- importe_cuota DECIMAL(8,2),
-- anotaciones TEXT,
-- PRIMARY KEY(id_cuota),
-- FOREIGN KEY (id_socio) REFERENCES socios(id_socio)
-- ) ENGINE=InnoDB;

-- -- ZONA DE EJEMPLO DE INSERCION

-- -- Inserción de datos en la base, tabla socios.

-- INSERT INTO socios (id_socio, nombre, apellidos, dni, domicilio, localidad, tipo_socio, fecha_alta, fecha_baja, correo, contrasena, paga_ult_recibo, anotaciones) VALUES
-- (1, 'Oscar', 'De la Cuesta', '12660481', 'La direcion', 'Palencia', 'A', '2010-11-25', '2010-12-20', 'oscar@example.com', 'password1', 'S', 'Este cliente soy yo'),
-- (2, 'Joel', 'Morta', '78546754', 'C\\ Gandia', 'Valencia', 'C', '2010-11-25', NULL, 'joel@example.com', 'password2', 'N', 'Este cliente es un moroso'),
-- (3, 'Pedro', 'Anero', '124342340', 'C\\ Buenos aires', 'Barcelona', 'B', '2010-12-01', '2010-12-20', 'pedro@example.com', 'password3', 'S', 'Cliente habitual'),
-- (4, 'Ana', 'Rodriguez', '34343444', 'C\\ Serrano', 'Madrid', 'B', '2010-12-01', '2010-12-20', 'ana@example.com', 'password4', 'S', 'Solo veranos'),
-- (5, 'Luis', 'Serrit', '12776043', 'C\\ Las brisas', 'Santander', 'C', '2010-11-25', '2010-12-25', 'luis@example.com', 'password5', 'S', 'Invierno'),
-- (6, 'Maria', 'Arcona', '33176043', 'C\\ Asador', 'Santander', 'C', NULL, NULL, 'maria@example.com', 'password6', 'S', 'Epoca de Verano'),
-- (7, 'Jose', 'Coma', '12773343', 'C\\ Valverde', 'Palencia', 'A', '2010-11-25', '2010-12-25', 'jose@example.com', 'password7', 'S', 'No es un cliente habitual'),
-- (8, 'Marcos', 'Garcia', '12224343', 'C\\ Los pedernales', 'Palencia', 'A', '2010-11-25', '2010-12-25', 'marcos@example.com', 'password8', 'S', 'Le gusta el senderismo'),
-- (9, 'Beatriz', 'Arconada', '12324343', 'C\\ Los Girasoles', 'Palencia', 'B', '2010-11-25', '2010-12-25', 'beatriz@example.com', 'password9', 'S', 'Posee tarjeta de descuento'),
-- (10, 'Veronica', 'Artea', '54124343', 'C\\ lobro', 'Palencia', 'A', '2010-11-25', '2010-12-25', 'veronica@example.com', 'password10', 'S', 'Cliente bastante formal');

-- -- Inserción de datos en la base, tabla cuotas.
-- INSERT INTO cuotas VALUES(1,1,'2010-12-25', 100,'El cliente tiene las cuentas saldadas');
-- INSERT INTO cuotas VALUES(2,2,NULL, 0,'El cliente no paga');
-- INSERT INTO cuotas VALUES(3,3,'2010-12-25', 50,'El cliente tiene las cuentas saldadas');
-- INSERT INTO cuotas VALUES(4,4,'2010-12-25', 40,'El cliente tiene las cuentas saldadas');
-- INSERT INTO cuotas VALUES(5,5,'2010-12-25', 30,'El cliente tiene las cuentas saldadas');
-- INSERT INTO cuotas VALUES(6,6,'2010-12-25', 5,'El cliente debe dinero');
-- INSERT INTO cuotas VALUES(7,7,'2010-12-25', 4,'El cliente debe dinero');
-- INSERT INTO cuotas VALUES(8,8,'2010-12-25', 2,'El cliente debe dinero');
-- INSERT INTO cuotas VALUES(9,1,'2010-12-25', 15,'El cliente tiene dinero');
-- INSERT INTO cuotas VALUES(10,10,'2010-12-25',120,'Cliente solvente');

-- -- Mostrar tablas y describir la tabla socios.
-- SHOW TABLES;
-- DESCRIBE socios;
-- SELECT * FROM socios;
-- COMIENZO DEL FICHERO .sql --

-- He creado una estructura de tablas relacionales para ver el ejemplo funcionamiento
-- en MYSQL y para realizar consultas en 2 tablas.
-- La cuota figura en la tabla cuotas relacionada con la tabla beneficiarios gracias a InnoDB.

-- ZONA DE DEFINICION

DROP DATABASE IF EXISTS banco_alimentos;
CREATE DATABASE banco_alimentos;
USE banco_alimentos;

CREATE TABLE usuarios
(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(50) NOT NULL,
    pass VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;

-- Inserción de datos en la base, tabla usuarios.

INSERT INTO usuarios (nombre, correo, pass) VALUES
('Braulio', 'braulio@example.com', 'a'),
('Joel', 'joel@example.com', 'password2'),
('Pedro', 'pedro@example.com', 'password3'),
('Ana', 'ana@example.com', 'password4'),
('Luis', 'luis@example.com', 'password5'),
('Maria', 'maria@example.com', 'password6'),
('Jose', 'jose@example.com', 'password7'),
('Marcos', 'marcos@example.com', 'password8'),
('Beatriz', 'beatriz@example.com', 'password9'),
('Veronica', 'veronica@example.com', 'password10'),
('Carlos', 'carlos@example.com', 'password11'),
('Lucia', 'lucia@example.com', 'password12'),
('Juan', 'juan@example.com', 'password13'),
('Marta', 'marta@example.com', 'password14'),
('David', 'david@example.com', 'password15'),
('Sara', 'sara@example.com', 'password16'),
('Alejandro', 'alejandro@example.com', 'password17'),
('Paula', 'paula@example.com', 'password18'),
('Fernando', 'fernando@example.com', 'password19'),
('Sofia', 'sofia@example.com', 'password20');


CREATE TABLE winners
(
    YEAR INT NOT NULL AUTO_INCREMENT,
    HOST VARCHAR(50) NOT NULL,
    CHAMPION VARCHAR(50) NOT NULL,
    SEGUNDONES VARCHAR(255) NOT NULL,
    THIRD_PLACE VARCHAR(255) NOT NULL,
    TEAMS INT NOT NULL,
    MATCHES_PLAYED INT NOT NULL,
    GOALS_SCORED INT NOT NULL,
    AVG_GOALS_PER_GAME int NOT NULL,
    PRIMARY KEY (YEAR)
) ENGINE=InnoDB;
INSERT INTO winners (YEAR, HOST, CHAMPION, SEGUNDONES, THIRD_PLACE, TEAMS, MATCHES_PLAYED, GOALS_SCORED, AVG_GOALS_PER_GAME) VALUES
('1930', 'Uruguay', 'Uruguay', 'Argentina', 'United States', '13', '16', '70', '3.6'),
('1934', 'Italy', 'Italy', 'Czechoslovakia', 'Germany', '16', '17', '70', '4.1'),
('1938', 'France', 'Italy', 'Hungary', 'Brazil', '15', '18', '84', '4.7'),
('1950', 'Brazil', 'Uruguay', 'Brazil', 'Sweden', '13', '22', '88', '4'),
('1954', 'Switzerland', 'West Germany', 'Hungary', 'Austria', '16', '26', '140', '5.4'),
('1958', 'Sweden', 'Brazil', 'Sweden', 'France', '16', '35', '126', '3.6'),
('1962', 'Chile', 'Brazil', 'Czechoslovakia', 'Chile', '16', '32', '89', '2.8'),
('1966', 'England', 'England', 'West Germany', 'Portugal', '16', '32', '89', '2.8'),
('1970', 'Mexico', 'Brazil', 'Italy', 'West Germany', '16', '32', '95', '3'),
('1974', 'West Germany', 'West Germany', 'Netherlands', 'Poland', '16', '38', '97', '2.6'),
('1978', 'Argentina', 'Argentina', 'Netherlands', 'Brazil', '16', '38', '102', '2.7'),
('1982', 'Spain', 'Italy', 'West Germany', 'Poland', '24', '52', '146', '2.8'),
('1986', 'Mexico', 'Argentina', 'West Germany', 'France', '24', '52', '132', '2.5'),
('1990', 'Italy', 'West Germany', 'Argentina', 'Italy', '24', '52', '115', '2.2'),
('1994', 'United States', 'Brazil', 'Italy', 'Sweden', '24', '52', '141', '2.7'),
('1998', 'France', 'France', 'Brazil', 'Croatia', '32', '64', '171', '2.7'),
('2002', 'South Korea, Japan', 'Brazil', 'Germany', 'Turkey', '32', '64', '161', '2.5'),
('2006', 'Germany', 'Italy', 'France', 'Germany', '32', '64', '147', '2.3'),
('2010', 'South Africa', 'Spain', 'Netherlands', 'Germany', '32', '64', '145', '2.3'),
('2014', 'Brazil', 'Germany', 'Argentina', 'Netherlands', '32', '64', '171', '2.7'),
('2018', 'Russia', 'France', 'Croatia', 'Belgium', '32', '64', '169', '2.6'),
('2022', 'Qatar', 'Argentina', 'France', 'Croatia', '32', '64', '172', '2.7');
-- Mostrar tablas y describir la tabla usuarios.
SHOW TABLES;
DESCRIBE usuarios;
SELECT * FROM usuarios;
