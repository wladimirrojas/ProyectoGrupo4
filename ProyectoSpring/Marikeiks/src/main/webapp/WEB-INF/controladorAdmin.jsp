<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Gestion Base de Datos</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">

</head>
<style>
body {
	background-color: #353F53;
}

#principal {
	padding-top: 60px;
	padding-left: 200px;
}

h1 {
	color: white;
	text-align: center;
}
</style>
<body class="container-fluid">
	<h1>Administración de datos Marikeiks</h1>
	<hr>

	<div id="principal">

		<div>
			<div class="card mb-3" style="max-width: 540px;">
				<a href="/admin/producto" alt=""
					style="text-decoration: none; color: black;">
					<div class="row g-0">

						<div class="col-md-4">

							<img src="/img/admin.jpg" class="img-fluid rounded-start"
								alt="...">

						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h5 class="card-title">Productos</h5>
								<p class="card-text">Esta sección te permitirá ver tus
									productos actuales, eliminar productos existentes, actualizar y
									agregar nuevos.</p>
								<p class="card-text">
									<small class="text-muted">Actualizado hace 18 hrs atrás</small>
								</p>
							</div>
						</div>

					</div>

				</a>
			</div>
			<div class="card mb-3" style="max-width: 540px;">
				<a href="/admin/tipoProducto" alt=""
					style="text-decoration: none; color: black;">
					<div class="row g-0">
						<div class="col-md-4">
							<img src="/img/admin2.png" class="img-fluid rounded-start"
								alt="...">
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h5 class="card-title">Tipo de productos</h5>
								<p class="card-text">Esta sección te permitirá ver tus tipos
									de producto actuales, eliminar productos existentes, actualizar
									y agregar nuevos.</p>
								<p class="card-text">
									<small class="text-muted">Actualizado hace 22 hrs atrás</small>
								</p>
							</div>
						</div>
					</div>
				</a>
			</div>
			<div class="card mb-3" style="max-width: 540px;">
				<a href="/admin/producto" alt=""
					style="text-decoration: none; color: black;">
					<div class="row g-0">
						<div class="col-md-4">
							<img src="/img/admin3.jpg" class="img-fluid rounded-start"
								alt="...">
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h5 class="card-title">Decoraciones</h5>
								<p class="card-text">Esta sección te permitirá ver tus
									decoraciones actuales, eliminar productos existentes,
									actualizar y agregar nuevos.</p>
								<p class="card-text">
									<small class="text-muted">Actualizado hace 19 hrs atrás</small>
								</p>
							</div>
						</div>
					</div>
				</a>
			</div>
			<div class="card mb-3" style="max-width: 540px;">
				<a href="/admin/producto" alt=""
					style="text-decoration: none; color: black;">
					<div class="row g-0">
						<div class="col-md-4">
							<img src="/img/admin4.jpg" class="img-fluid rounded-start"
								alt="...">
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h5 class="card-title">Sabores</h5>
								<p class="card-text">Esta sección te permitirá ver tus
									sabores actuales, eliminar productos existentes, actualizar y
									agregar nuevos.</p>
								<p class="card-text">
									<small class="text-muted">Actualizado hace 15 hrs atrás</small>
								</p>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>




</body>
</html>