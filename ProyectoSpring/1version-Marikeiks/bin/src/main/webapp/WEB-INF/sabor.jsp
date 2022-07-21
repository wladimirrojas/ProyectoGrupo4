<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
            <!DOCTYPE html>
            <html>

            <head>
                <meta charset="UTF-8">
                <title>Sabores</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossorigin="anonymous">
            </head>

            <body>
                <div class="container">
                    <c:if test="${msgError!= null}">
                        <c:out value="${msgError}"></c:out>
                    </c:if>
                    <form:form action="/sabor/guardar" method="post" modelAttribute="sabor">
                        <form:label path="nombre" class="form-label">Nombre:</form:label>
                        <form:input path="nombre" type="text" max="20" class="form-control" />
                        <br>
                        <form:label path="descripcion" class="form-label">Descripcion:</form:label>
                        <form:input path="descripcion" type="text" max="100" class="form-control" />
                        <br>
                        <form:label path="disponible" class="form-label">Disponible:</form:label>
                        <form:input type="number" min="0" max="1" path="disponible" class="form-control" />

                        <!-- <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                            <label class="form-check-label" for="flexCheckChecked">
                                Disponible
                            </label>
                        </div> -->

                        <br>
                        <form:label path="stock" class="form-label">Stock:</form:label>
                        <form:input type="number" path="stock" class="form-control" />
                        <br>
                        <button type="submit" class="btn btn-outline-primary">Guardar Sabor</button>
                    </form:form>

                    <br>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Disponible</th>
                                <th scope="col">Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            <c:forEach var="sabor" items="${listaSabores}">
                                <tr>
                                    <th scope="row">${sabor.id}</th>
                                    <td>${sabor.nombre}</td>
                                    <td>${sabor.descripcion}</td>
                                    <td>${sabor.disponible}</td>
                                    <td>${sabor.stock}</td>
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