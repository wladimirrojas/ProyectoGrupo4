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
<!-- ingreso de datos -->
	<div class="container">
		<!-- ingreso de datos -->
		<form:form action="/admin/producto/actualizar/${producto.id}" method="post"
			modelAttribute="producto">
			<h1 class="p-3 mb-2 bg-success text-white text-center text-uppercase">Ingreso
				de productos</h1>
			<form:label path="nombre">Nombre producto: </form:label>
			<form:input path="nombre" class="form-control" for="nombre" />
			<br>
			<form:label path="descripcion">Descripcion: </form:label>
			<form:input path="descripcion" class="form-control" for="descripcion" />
			<br>
			<form:label path="stock">Stock: </form:label>
			<form:input path="stock" class="form-control" for="stock" />
			<br>
			<form:label path="precio">Precio: </form:label>
			<form:input path="precio" class="form-control" for="precio" />
			<br>
			<form:label path="vegano">Vegano: </form:label>
			<form:input path="vegano" class="form-control" for="vegano" />
			<br>
			<form:label path="url">Url: </form:label>
			<form:input path="url" class="form-control" for="url" />
			<br>
			<form:select path="tipoProducto" class="form-select">
				<form:option value="0">Tipo de producto: </form:option>
				<c:forEach var="tipoProducto" items="${listaTipoProductos}">
					<form:option value="${tipoProducto.id}">${tipoProducto.nombre}</form:option>
				</c:forEach>
			</form:select>
			<br>
			<form:select path="decoracion" class="form-select">
				<form:option value="0">Decoracion: </form:option>
				<c:forEach var="decoracion" items="${listaDecoraciones}">
					<form:option value="${decoracion.id}">${decoracion.nombre}</form:option>
				</c:forEach>
			</form:select>
			<br>
			<form:select path="sabor" class="form-select">
				<form:option value="0">Sabor: </form:option>
				<c:forEach var="sabor" items="${listaSabores}">
					<form:option value="${sabor.id}">${sabor.nombre}</form:option>
				</c:forEach>
			</form:select>
			<br>
			<form:select path="cantidad" class="form-select">
				<form:option value="0">Cantidad: </form:option>
				<c:forEach var="cantidad" items="${listaCantidades}">
					<form:option value="${cantidad.id}">${cantidad.porcion} porciones</form:option>
				</c:forEach>
			</form:select>
			<button type="submit" class="btn btn-outline-primary">Editar Producto</button>
		</form:form>
</body>
</html>