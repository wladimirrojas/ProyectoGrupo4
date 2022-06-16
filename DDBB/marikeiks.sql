use marikeiks;

DROP TABLE IF EXISTS sabores;
DROP TABLE IF EXISTS tipo_productos;
DROP TABLE IF EXISTS decoraciones;
DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS despacho_retiros;
DROP TABLE IF EXISTS ventas;
DROP TABLE IF EXISTS estado_ventas;
DROP TABLE IF EXISTS ventas_productos;


CREATE TABLE sabores (
id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombre VARCHAR(20),
descripcion VARCHAR(100),
disponible BOOLEAN,
stock INTEGER);

CREATE TABLE tipo_productos (
id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombre VARCHAR(20),
porcion_cantidad INTEGER,
sabores_id INTEGER);

CREATE TABLE decoraciones (
id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombre VARCHAR(20),
descripcion VARCHAR(100),
stock INTEGER,
precio INTEGER);

CREATE TABLE productos (
id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
descripcion VARCHAR(100),
stock INTEGER,
precio INTEGER,
vegano BOOLEAN,
tipo_productos_id INTEGER,
decoraciones_id INTEGER);

CREATE TABLE clientes (
id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombre VARCHAR(50),
apellido VARCHAR(50),
telefono VARCHAR(12),
correo VARCHAR(50),
direccion VARCHAR(50));

CREATE TABLE despacho_retiros (
id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
estado VARCHAR(20));

CREATE TABLE ventas (
id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
fecha_emision DATE,
fecha_entrega DATE,
cliente_id INTEGER,
estado_ventas_id INTEGER,
despacho_retiros_id INTEGER);

CREATE TABLE estado_ventas (
id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombre VARCHAR(20),
comentario VARCHAR(150));

CREATE TABLE ventas_productos (
productos_id INTEGER,
ventas_id INTEGER,
cantidad INTEGER,
precio_total INTEGER,
descuento INTEGER,
iva_total INTEGER,
comentario VARCHAR(150),
PRIMARY KEY (productos_id,ventas_id));

ALTER TABLE tipo_productos ADD CONSTRAINT tipo_productos_sabores_id_sabores_id FOREIGN KEY (sabores_id) REFERENCES sabores(id);
ALTER TABLE productos ADD CONSTRAINT productos_tipo_productos_id_tipo_productos_id FOREIGN KEY (tipo_productos_id) REFERENCES tipo_productos(id);
ALTER TABLE productos ADD CONSTRAINT productos_decoraciones_id_decoraciones_id FOREIGN KEY (decoraciones_id) REFERENCES decoraciones(id);
ALTER TABLE ventas ADD CONSTRAINT ventas_cliente_id_clientes_id FOREIGN KEY (cliente_id) REFERENCES clientes(id);
ALTER TABLE ventas ADD CONSTRAINT ventas_estado_ventas_id_estado_ventas_id FOREIGN KEY (estado_ventas_id) REFERENCES estado_ventas(id);
ALTER TABLE ventas ADD CONSTRAINT ventas_despacho_retiros_id_despacho_retiros_id FOREIGN KEY (despacho_retiros_id) REFERENCES despacho_retiros(id);
ALTER TABLE ventas_productos ADD CONSTRAINT ventas_productos_productos_id_productos_id FOREIGN KEY (productos_id) REFERENCES productos(id);
ALTER TABLE ventas_productos ADD CONSTRAINT ventas_productos_ventas_id_ventas_id FOREIGN KEY (ventas_id) REFERENCES ventas(id);