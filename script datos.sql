INSERT INTO decoraciones (descripcion, nombre, precio, stock) 
VALUES
('Frutas de la Estación','Frutas', 5000, 100),
('Flores','Flores', 5000, 100),
('Unicornio','Unicornio', 8000, 100),
('Sirena','Sirena', 8000, 100),
('Números o letras','Formas', 8000, 100),
('Macarons o profitelores','MyP', 1500, 100),
('Figuras en azúcar','Figura', 5000, 100),
('Flores en azúcar','Flores', 5000, 100);

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


INSERT INTO tipo_productos (nombre, porcion_cantidad, sabores_id) 
VALUES
('Torta', 10, 1),
('Torta', 15, 1),
('Torta', 20, 1),
('Torta', 25, 1),
('Torta', 30, 1),
('Porción', 1, 1),

('Torta', 10, 2),
('Torta', 15, 2),
('Torta', 20, 2),
('Torta', 25, 2),
('Torta', 30, 2),
('Porción', 1, 2),

('Torta', 10, 3),
('Torta', 15, 3),
('Torta', 20, 3),
('Torta', 25, 3),
('Torta', 30, 3),
('Porción', 1, 3),

('Torta', 10, 4),
('Torta', 15, 4),
('Torta', 20, 4),
('Torta', 25, 4),
('Torta', 30, 4),
('Porción', 1, 4),

('Torta', 10, 5),
('Torta', 15, 5),
('Torta', 20, 5),
('Torta', 25, 5),
('Torta', 30, 5),
('Porción', 1, 5),

('Torta', 10, 6),
('Torta', 15, 6),
('Torta', 20, 6),
('Torta', 25, 6),
('Torta', 30, 6),
('Porción', 1, 6),

('Torta', 10, 7),
('Torta', 15, 7),
('Torta', 20, 7),
('Torta', 25, 7),
('Torta', 30, 7),
('Porción', 1, 7),

('Torta vegana', 10, 8),
('Torta vegana', 15, 8),
('Torta vegana', 20, 8),
('Torta vegana', 25, 8),
('Torta vegana', 30, 8),
('Porción vegan', 1, 8),

('Torta vegana', 10, 9),
('Torta vegana', 15, 9),
('Torta vegana', 20, 9),
('Torta vegana', 25, 9),
('Torta vegana', 30, 9),
('Porción vegan', 1, 9),

('Torta vegana', 10, 10),
('Torta vegana', 15, 10),
('Torta vegana', 20, 10),
('Torta vegana', 25, 10),
('Torta vegana', 30, 10),
('Porción vegan', 1, 10),

('Torta vegana', 10, 11),
('Torta vegana', 15, 11),
('Torta vegana', 20, 11),
('Torta vegana', 25, 11),
('Torta vegana', 30, 11),
('Porción vegan', 1, 11),

('Torta vegana', 10, 12),
('Torta vegana', 15, 12),
('Torta vegana', 20, 12),
('Torta vegana', 25, 12),
('Torta vegana', 30, 12),
('Porción vegan', 1, 12),

('Pedido por mayor',       1, 13),
('Cupcakes 1 sabor',       1, 13),
('Cupcakes 2 sabores',     1, 13),
('30 minicupcake 1 sabor', 1, 13),

('Pedido por mayor',       1, 14),
('Cupcakes 1 sabor',       1, 14),
('Cupcakes 2 sabores',     1, 14),
('30 minicupcake 1 sabor', 1, 14),

('Pedido por mayor',       1, 15),
('Cupcakes 1 sabor',       1, 15),
('Cupcakes 2 sabores',     1, 15),
('30 minicupcake 1 sabor', 1, 15),

('Pedido por mayor',       1, 16),
('Cupcakes 1 sabor',       1, 16),
('Cupcakes 2 sabores',     1, 16),
('30 minicupcake 1 sabor', 1, 16),

('Pedido por mayor',       1, 17),
('Cupcakes 1 sabor',       1, 17),
('Cupcakes 2 sabores',     1, 17),
('30 minicupcake 1 sabor', 1, 17),

('Pedido por mayor',       1, 18),
('Cupcakes 1 sabor',       1, 18),
('Cupcakes 2 sabores',     1, 18),
('30 minicupcake 1 sabor', 1, 18),

('Pedido por mayor',       1, 19),
('Cupcakes 1 sabor',       1, 19),
('Cupcakes 2 sabores',     1, 19),
('30 minicupcake 1 sabor', 1, 19),

('Pedido por mayor',       1, 20),
('Cupcakes 1 sabor',       1, 20),
('Cupcakes 2 sabores',     1, 20),
('30 minicupcake 1 sabor', 1, 20),

('Pedido por mayor',       1, 21),
('Cupcakes 1 sabor',       1, 21),
('Cupcakes 2 sabores',     1, 21),
('30 minicupcake 1 sabor', 1, 21),

('Pedido por mayor',       1, 22),
('Cupcakes 1 sabor',       1, 22),
('Cupcakes 2 sabores',     1, 22),
('30 minicupcake 1 sabor', 1, 22),

('Pedido por mayor',       1, 23),
('Cupcakes 1 sabor',       1, 23),
('Cupcakes 2 sabores',     1, 23),
('30 minicupcake 1 sabor', 1, 23),

('Pedido por mayor',       1, 24),
('Cupcakes 1 sabor',       1, 24),
('Cupcakes 2 sabores',     1, 24),
('30 minicupcake 1 sabor', 1, 24),

('Decoraciones fondant', 1);


INSERT INTO productos (descripcion, precio, stock, vegano, decoracion_id, tipo_producto_id)
VALUES('Torta redonda 20cm', 30000, 1, 0, 1, 1);

INSERT INTO estados_ventas (comentario, nombre)
VALUES('Pedido está en la línea de producción', 'Procesando pedido');

INSERT INTO despacho_retiros (estado)
VALUES('enviando');

INSERT INTO clientes (nombre, apellido, correo, direccion, telefono)
VALUES('Dan', 'Ab', 'dan.ab@gmail.com', 'San Diego 15514', '56937299257'),
('Esteban de mi corazón', 'Poronga de Fierro', 'tuporonguinbienbellako@gmail.com', 'San Diego 15514', '56937299257');

INSERT INTO ventas (comentario, fecha_emision, fecha_entrega, iva_subtotal, subtotal, cliente_id, despacho_retiros_id, estado_ventas_id)
VALUES('Pago tarjeta debito', '2022-07-08', '2022-07-18', 6300, 35000, 1, 1, 1);

INSERT INTO ventas_productos (cantidad, descuento, iva_total, subtotal, ventas_id, producto_id, venta_id)
VALUES(1, 0, 6300, 35000, 1, 1, 1);