<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>        
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Estado de venta</title>

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

	<h1> <p class="text-primary">Ingrese sus estados de venta</p> </h1>
	<br>

	<form:form action="/estadoVenta/guardar" method="post" modelAttribute="estadoVenta" >
			<form:label path="nombre" class="form-label">Ingrese el nombre:</form:label>
			<form:input type="text" path="nombre" class="form-control"/>
			<br>	
			<form:label path="comentario" class="form-label">Ingrese un comentario:</form:label>
			<form:input type="text" path="comentario" class="form-control"/>
			<br>
			<br>
			<button type="submit" class="btn btn-outline-primary">Guardar</button>
		</form:form>
			<br>
			<br>		
			<h1> <p class="text-secondary" align="center">Lista de estados ingresados</p> </h1>
			
			<!-- Tabla de estados -->
			
		<div class= "container">
	<table class="table">
	<thead>
   	 <tr>
     	<th scope="col">#</th>
     	<th scope="col">ID</th>
      	<th scope="col">Nombre</th>
      	<th scope="col">Comentario</th>
      	<th scope="col">Opciones</th>
    </tr>
  </thead>
	 <tbody>
		<c:forEach var="estado_venta" items="${listaEstados}">
		<tr>
      		<td class="counterCell"></td>
      		<td>${estadoVenta.id}</th> 
      		<td>${estadoVenta.nombre}</td>
      		<td>${estadoVenta.comentario}</td>
     		
     		<td><a class="btn btn-warning" href="/estadoVenta/editar/${estadoVenta.id}" role="button">Editar</a></td>
			<td><a class="btn btn-danger" href="/estadoVenta/eliminar/${estadoVenta.id}" role="button">Eliminar</a></td>
     		
	    </tr>
		</c:forEach>
		
  </tbody>
 </table>			
	</div>
</body>
</html>