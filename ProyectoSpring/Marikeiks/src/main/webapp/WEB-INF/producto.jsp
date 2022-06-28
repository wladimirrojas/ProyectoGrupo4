<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Bienvenido a Marikeiks</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">
</head>
<body>
	<!-- ingreso de datos -->
	<div class="container">
		<!-- ingreso de datos -->
		<form:form action="/producto/guardar" method="post" modelAttribute="producto">
			<h1 class="p-3 mb-2 bg-success text-white text-center text-uppercase">Ingreso de productos</h1>
			
			<form:label path="id" >Id de Taza: </form:label>
			<form:input path="id" class="form-control" for="id"/>
			
			<form:label path="descripcion">Descripción: </form:label>
			<form:input path="descripcion" class="form-control" for="descripcion"/>
			<div>
			<br>
			<div class="row">
			<div class="col">
			<!-- <form:label path="stock">Stock: </form:label>	-->		
			<form:input type="number" class="form-control" path="stock" for="stock" placeholder="Stock"/>
			</div>
			<div class="col">
			<!-- <form:label path="precio">Precio: </form:label>-->					
			<form:input type="number" class="form-control" path="precio" for="precio" placeholder="Precio"/>
			</div>
			<div class="col">
			<!-- <form:label path="vegano">Vegano: </form:label>	-->				
			<form:input type="number" class="form-control" path="vegano" for="vegano" placeholder="Vegano"/>
			</div>
			</div>
			</div>
			<br>
			
			<form:label path="tipo_producto_id">Tipo de producto: </form:label>
			<form:input type="number" class="form-control" path="tipo_producto_id" for="tipo_producto_id"/>
			
			<form:label path="decoraciones_id">Decoracion: </form:label>
			<form:input type="number" class="form-control" path="decoraciones_id" for="decoraciones_id"/>
			
			<br>
			
			<button type="submit" class="btn btn-outline-primary" >Guardar Producto</button>
			</form:form>
<!-- private Long id;
	private String descripcion;
	private Integer stock;
	private Integer precio;
	private Integer vegano;
	private Integer tipo_producto_id;
	private Integer decoraciones_id; -->


	</div>
	<!-- muestreo de datos -->
	<div class="container">
	<table class="table">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Descripción</th>
					<th scope="col">Stock</th>
					<th scope="col">Precio</th>
					<th scope="col">Vegano</th>
					<th scope="col">Tipo de producto</th>
					<th scope="col">Decoracion</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="producto" items="${listaProductos}">
					<tr>
						<th scope="row">${producto.id}</th>
						<td>${producto.descripcion}</td>
						<td>${producto.stock}</td>
						<td>${producto.precio}</td>
						<td>${producto.vegano}</td>
						<td>${producto.tipo_producto_id}</td>
						<td>${producto.decoraciones_id}</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>	
	</div>
</body>
</html>