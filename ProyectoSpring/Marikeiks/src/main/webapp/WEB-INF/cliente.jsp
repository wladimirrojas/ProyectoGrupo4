<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>        
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Datos</title>

<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">
</head>
			<style>
                /* Aqui se crea el contador y se setea a 0*/
                table {
                    counter-reset: contador;
                }
                /*Aqui se suma 1 para cada celda */
                .counterCell:before {
                    content: counter(contador);
                    counter-increment: contador; /* se puede hacer contador+X para aumentar el incrementado*/
                }
            </style>
<body>
	<div class="container">

	<h1> <p class="text-primary">¡Bienvenido/a! Ingrese los datos para ingresar el pedido</p> </h1>
	<br>

	<form:form action="/admin/cliente/guardarCliente" method="post" modelAttribute="cliente" >
			<form:label path="nombre" class="form-label">Ingrese su nombre:</form:label>
			<form:input type="text" path="nombre" class="form-control"/>
			<br>	
			<form:label path="apellido" class="form-label">Ingrese su apellido:</form:label>
			<form:input type="text" path="apellido" class="form-control"/>
			<br>	
			<form:label path="correo" class="form-label">Ingrese su correo electrónico:</form:label>
			<form:input type="text" path="correo" class="form-control"/>
			<br>
			<form:label path="direccion" class="form-label">Ingrese su dirección:</form:label>
			<form:input type="text" path="direccion" class="form-control"/>
			<br>
			<form:label path="telefono" class="form-label">Ingrese su teléfono:</form:label>
			<form:input type="text" path="telefono" class="form-control"/>
			<br>
			<br>
			<button type="submit" class="btn btn-outline-primary">Registrar cliente</button>
		</form:form>
			<br>
			<br>		
			<h1> <p class="text-secondary" align="center">Lista de clientes registrados</p> </h1>
			
			<!-- Tabla de clientes -->
			
		<div class= "container">
	<table class="table">
	<thead>
   	 <tr>
     	<th scope="col">#</th>
     	<th scope="col">ID</th>
      	<th scope="col">Nombre</th>
      	<th scope="col">Apellido</th>
      	<th scope="col">Correo electrónico</th>
      	<th scope="col">Dirección</th>
      	<th scope="col">Teléfono</th>
      	<th scope="col">Opciones</th>
    </tr>
  </thead>
	 <tbody>
		<c:forEach var="cliente" items="${listaClientes}">
		<tr>
      		<td class="counterCell"></td>
      		<td>${cliente.id}</th> 
      		<td>${cliente.nombre}</td>
      		<td>${cliente.apellido}</td>
      		<td>${cliente.correo}</td>
      		<td>${cliente.direccion}</td>
     		<td>${cliente.telefono}</td>
     		
     		<td><a class="btn btn-warning" href="/cliente/editar/${cliente.id}" role="button">Editar</a></td>
			<td><a class="btn btn-danger" href="/cliente/eliminar/${cliente.id}" role="button">Eliminar</a></td>
     		
	    </tr>
		</c:forEach>
		
  </tbody>
 </table>			
	</div>
</body>
</html>