<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
            <!DOCTYPE html>
            <html>

            <head>
                <meta charset="UTF-8">
                <title>Tipo de Producto</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossorigin="anonymous">
            </head>

            <body>
                <div class="container">
                    <c:if test="${msgError!= null}">
                        <c:out value="${msgError}"></c:out>
                    </c:if>
                    <form:form action="/tipo_producto/guardar" method="post" modelAttribute="tipo_producto">
                        <form:label path="nombre" class="form-label">Nombre:</form:label>
                        <form:input path="nombre" type="text" max="20" class="form-control" />
                        <br>
                        <form:label path="porcion_cantidad" class="form-label">Cantidad o Porciones:</form:label>
                        <form:input path="porcion_cantidad" type="number" class="form-control" />
                        <br>
                        <!-- Aqui añadir relacion 1 a muchos -->
                        <button type="submit" class="btn btn-outline-primary">Guardar tipo de producto</button>
                    </form:form>
                    <br>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Cantidad o Porciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <c:forEach var="tipo_producto" items="${listaTipo_productos}">
                                <tr>
                                    <th scope="row">${tipo_producto.id}</th>
                                    <td>${tipo_producto.nombre}</td>
                                    <td>${tipo_producto.porcion_cantidad}</td>
                                    <!--
                        <td><a class="btn btn-warning" href="/licencia/editar/${licencia.id}"
                                role="button">Editar</a></td>
                        <td><a class="btn btn-danger" href="/licencia/eliminar/${licencia.id}"
                                role="button">Eliminar</a></td>
                        -->
                                </tr>
                            </c:forEach>
                        </tbody>
                    </table>
                </div>
            </body>

            </html>