<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>CRUD de Tipo de Productos</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">
</head>
<body>
	<!-- ingreso de datos -->
	<div class="container-fluid d-flex">
		<!-- ingreso de datos -->
		<form:form action="/admin/producto/guardar" method="post"
			modelAttribute="tipoProducto" style="width: 500px;" class="form-control justify-content-center">
			<h1 class="p-3 mb-2 bg-success text-white text-center text-uppercase" style="border-radius: 15px;">Ingreso
				de Tipo de productos</h1>
			<form:label path="nombre">Nombre Tipo de Producto: </form:label>
			<form:input path="nombre" class="form-control" for="nombre" />
			<br>
			
			<button type="submit" class="btn btn-outline-primary">Guardar Tipo de Producto</button>
		</form:form>
		<!-- private Long id;
	private String descripcion;
	private Integer stock;
	private Integer precio;
	private Integer vegano;
	private Integer tipo_producto_id;
	private Integer decoraciones_id; -->
		<div>
			<table class="table">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Nombre</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="producto" items="${listaTipoProductos}">
						<tr>
							<th scope="row">${tipoProducto.id}</th>
							<td>${tipoProducto.nombre}</td>
							
							<td><a class="btn btn-warning" href="producto/editar/${tipoProducto.id}">Editar</a></td>
							<td><a class="btn btn-danger" href="producto/eliminar/${tipoProducto.id}" >Eliminar</a></td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
	</div>
	<!-- muestreo de datos -->
	

</body>
</html>