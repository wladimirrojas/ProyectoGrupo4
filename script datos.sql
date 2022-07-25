use marikeiks;
INSERT INTO decoraciones (descripcion, nombre, precio, stock) 
VALUES

('Decoracion basica','simple', 0, 100),
('Frutas de la Estación','Frutas', 5000, 100),
('Flores','Flores', 5000, 100),
('Unicornio','Unicornio', 8000, 100),
('Sirena','Sirena', 8000, 100),
('Números o letras','Formas', 8000, 100),
('Macarons o profitelores','MyP', 1500, 100),
('Figuras en azúcar','Figura', 5000, 100),
('Flores en azúcar','Flores', 5000, 100);

INSERT INTO tipo_productos (nombre) 
VALUES
('Tortas'),
('Cupcakes'),
('Galletas'),
('CandyBar'),
('Decoraciones fondant');

INSERT INTO cantidades (porcion)
VALUES
('5'),
('10'),
('15'),
('20'),
('25'),
('30'),
('35');

INSERT INTO sabores (descripcion, disponible, nombre, stock) 
VALUES
('Bizcocho de chocolate húmedo relleno de ganache de chocolate y naranjas confitadas.', 1, 'Peonía', 100),
('Bizcocho de nuez, remojado con almíbar de naranja, relleno de manjar y lúcuma.', 1, 'Magnolia', 100),
('Bizcocho de amapolas y ralladura de limón con ganache de chocolate blanco, frambuesas y manjar con nueces.', 1, 'Amapola', 100),
('Bizcocho de chocolate relleno de ganache de chocolate y frambuesas enteras.', 1, 'Violeta', 100),
('Bizcocho con cascaritas de limón relleno de ganache de chocolate blanco, frambuesas enteras y manjar.', 1, 'Jazmín', 100),
('Bizcocho de chocolate relleno de buttercream y galletas Oreo picadas.', 1, 'Lotto', 100),
('La clásica manjar, nuez y crema pastelera.', 1, 'Cala', 100),
('Bizcocho de chocolate con fruta vegan.', 1, 'Choco choco', 100),
('Bizcocho de chocolate con buttercream vegan y frambuesas o arándanos.', 1, 'Choco Frambuesa', 100),
('Bizcocho de banana con cáscaras de naranja, relleno con fruta vegan', 1, 'Banana chocolate', 100),
('Bizcocho de banana con cáscaras de limón relleno de buttercream vegan de frambuesa.', 1, 'Banana Frambuesa', 100),
('Bizcocho de chocolate con trufa vegan, mantequilla de maní y frambuesas', 1, 'Sabrosa', 100),
('Relleno de frambuesa', 1, 'Cupcake bizcocho chocolate', 100),
('Relleno de chocolate', 1, 'Cupcake bizcocho chocolate', 100),
('Relleno de Oreo', 1, 'Cupcake bizcocho chocolate', 100),
('Relleno de mantequilla de maní', 1, 'Cupcake bizcocho chocolate', 100),
('Relleno de frambuesa', 1, 'Cupcake Bizcocho Vainilla', 100),
('Relleno de chocolate', 1, 'Cupcake Bizcocho Vainilla', 100),
('Relleno de Oreo', 1, 'Cupcake Bizcocho Vainilla', 100),
('Relleno de mantequilla de maní', 1, 'Cupcake Bizcocho Vainilla', 100),
('Relleno de frambuesa', 1, 'Cupcake Bizcocho Limón', 100),
('Relleno de chocolate', 1, 'Cupcake Bizcocho Limón', 100),
('Relleno de Oreo', 1, 'Cupcake Bizcocho Limón', 100),
('Relleno de mantequilla de maní', 1, 'Cupcake Bizcocho Limón', 100);


INSERT INTO productos (descripcion, nombre, precio, stock, vegano, cantidades_id, decoracion_id, sabores_id, tipo_producto_id)

VALUES ('10 personas, sabor peonía','Torta', 35250, 100, 1, 3, 2, 2, 2);





INSERT INTO estados_ventas (comentario, nombre)
VALUES('Pedido está en la línea de producción', 'Procesando pedido');

INSERT INTO despacho_retiros (estado)
VALUES('enviando');

INSERT INTO clientes (nombre, apellido, correo, direccion, telefono)
VALUES('Dan', 'Ab', 'dan.ab@gmail.com', 'San Diego 15514', '56912345678'),
('Jose', 'Fierro', 'correoNoSeCual@gmail.com', 'San Diego 15514', '56912345678');

INSERT INTO ventas (comentario, fecha_emision, fecha_entrega, iva_subtotal, subtotal, cliente_id, despacho_retiros_id, estado_ventas_id)
VALUES('Pago tarjeta debito', '2022-07-08', '2022-07-18', 6300, 35000, 1, 1, 1);

INSERT INTO ventas_productos (cantidad, descuento, iva_total, subtotal, ventas_id, producto_id, venta_id)
VALUES(1, 0, 6300, 35000, 1, 1, 1);