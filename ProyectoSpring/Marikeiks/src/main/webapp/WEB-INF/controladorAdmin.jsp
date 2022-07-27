<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Demo</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">
</head>
<body>

	<div class="container">
		<p>Pestañas y acciones</p>
		<div style="max-width: 500px; min-width: 500px">
		
		<a href="../admin/producto" class="btn btn-primary" >CRUD Productos</a>
		<br>
		<a href="../admin/tipoProducto" class="btn btn-primary" >CRUD Tipo de productos</a>
		<br>
		<a href="../admin/decoracion" class="btn btn-primary" >CRUD Decoraciones</a>
		<br>
		<a href="../admin/sabor" class="btn btn-primary" >CRUD Sabores</a>
		<br>
		<a href="../admin/cantidad" class="btn btn-primary" >CRUD Cantidades</a>
		<br>
		<a href="../admin/ventas" class="btn btn-primary" >CRUD Ventas</a>		
		<br>
		</div>

	</div>


</body>
</html>