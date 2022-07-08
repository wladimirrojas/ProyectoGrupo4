INSERT INTO decoraciones (descripcion, nombre, precio, stock) 
VALUES('Sirena azul','Sirena', 5000, 15);

INSERT INTO sabores (descripcion, disponible, nombre, stock) 
VALUES('Merengue Suizo acaramelado', 1, 'Merengue', 5);

INSERT INTO tipo_productos (nombre, porcion_cantidad, sabores_id) 
VALUES('Torta', 15, 1);

INSERT INTO productos (descripcion, precio, stock, vegano, decoracion_id, tipo_producto_id) 
VALUES('Torta redonda 20cm', 30000, 1, 0, 1, 1);

INSERT INTO estados_ventas (comentario, nombre) 
VALUES('Pedido está en la línea de producción', 'Procesando pedido');

INSERT INTO despacho_retiros (estado) 
VALUES('enviando');

INSERT INTO clientes (nombre, apellido, correo, direccion, telefono) 
VALUES('Danko', 'Abarca', 'danko.abarca@gmail.com', 'San Diego 15514', '56937299257');

INSERT INTO ventas (comentario, fecha_emision, fecha_entrega, iva_subtotal, subtotal, cliente_id, despacho_retiros_id, estado_ventas_id) 
VALUES('Pago tarjeta debito', '2022-07-08', '2022-07-18', 6300, 35000, 1, 1, 1);

INSERT INTO ventas_productos (cantidad, descuento, iva_total, subtotal, ventas_id, producto_id, venta_id) 
VALUES(1, 0, 6300, 35000, 1, 1, 1);