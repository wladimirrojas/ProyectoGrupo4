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
nombre VARCHAR(20) NOT NULL,
descripcion VARCHAR(100) NOT NULL,
disponible BOOLEAN NOT NULL,
stock INTEGER NOT NULL);

CREATE TABLE tipo_productos (
id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombre VARCHAR(20) NOT NULL,
porcion_cantidad INTEGER NOT NULL,
sabores_id INTEGER NOT NULL);

CREATE TABLE decoraciones (
id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombre VARCHAR(20) NOT NULL,
descripcion VARCHAR(100) NOT NULL,
stock INTEGER NOT NULL,
precio INTEGER NOT NULL);

CREATE TABLE productos (
id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
descripcion VARCHAR(100) NOT NULL,
stock INTEGER NOT NULL,
precio INTEGER NOT NULL,
vegano BOOLEAN NOT NULL,
tipo_productos_id INTEGER NOT NULL,
decoraciones_id INTEGER NOT NULL);

CREATE TABLE clientes (
id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombre VARCHAR(50) NOT NULL,
apellido VARCHAR(50) NOT NULL,
telefono VARCHAR(12) NOT NULL,
correo VARCHAR(50) NOT NULL,
direccion VARCHAR(50) NOT NULL);

CREATE TABLE despacho_retiros (
id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
estado VARCHAR(20) NOT NULL);

CREATE TABLE ventas (
id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
fecha_emision DATE NOT NULL,
fecha_entrega DATE NOT NULL,
subtotal INTEGER NOT NULL,
comentario VARCHAR(100) NOT NULL,
iva_subtotal INTEGER NOT NULL,
cliente_id INTEGER NOT NULL,
estado_ventas_id INTEGER NOT NULL,
despacho_retiros_id INTEGER NOT NULL);

CREATE TABLE estado_ventas (
id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombre VARCHAR(20) NOT NULL,
comentario VARCHAR(100) NOT NULL);

CREATE TABLE ventas_productos (
productos_id INTEGER NOT NULL,
ventas_id INTEGER NOT NULL,
cantidad INTEGER NOT NULL,
precio_total INTEGER NOT NULL,
descuento INTEGER NOT NULL,
iva_total INTEGER NOT NULL,
PRIMARY KEY (productos_id,ventas_id));

ALTER TABLE tipo_productos ADD CONSTRAINT tipo_productos_sabores_id_sabores_id FOREIGN KEY (sabores_id) REFERENCES sabores(id);
ALTER TABLE productos ADD CONSTRAINT productos_tipo_productos_id_tipo_productos_id FOREIGN KEY (tipo_productos_id) REFERENCES tipo_productos(id);
ALTER TABLE productos ADD CONSTRAINT productos_decoraciones_id_decoraciones_id FOREIGN KEY (decoraciones_id) REFERENCES decoraciones(id);
ALTER TABLE ventas ADD CONSTRAINT ventas_cliente_id_clientes_id FOREIGN KEY (cliente_id) REFERENCES clientes(id);
ALTER TABLE ventas ADD CONSTRAINT ventas_estado_ventas_id_estado_ventas_id FOREIGN KEY (estado_ventas_id) REFERENCES estado_ventas(id);
ALTER TABLE ventas ADD CONSTRAINT ventas_despacho_retiros_id_despacho_retiros_id FOREIGN KEY (despacho_retiros_id) REFERENCES despacho_retiros(id);
ALTER TABLE ventas_productos ADD CONSTRAINT ventas_productos_productos_id_productos_id FOREIGN KEY (productos_id) REFERENCES productos(id);
ALTER TABLE ventas_productos ADD CONSTRAINT ventas_productos_ventas_id_ventas_id FOREIGN KEY (ventas_id) REFERENCES ventas(id);