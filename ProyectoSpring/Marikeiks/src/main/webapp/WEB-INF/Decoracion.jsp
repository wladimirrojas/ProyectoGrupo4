<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
            <!DOCTYPE html>
            <html>

            <head>
                <meta charset="UTF-8">
                <title>Venta</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossorigin="anonymous">
            </head>

            <body>
                <div class="container">
                    <c:if test="${msgError!= null}">
                        <c:out value="${msgError}"></c:out>
                    </c:if>
                    <form:form action="/decoracion/guardarDecoracion" method="post" modelAttribute="decoracion">
                        <form:label path="nombre" class="form-label">Nombre Decoracion:</form:label>
                        <form:input path="nombre" type="text"class="form-control" />
                        <br>
                        <form:label path="descripcion" class="form-label">Descripcion Decoracion:</form:label>
                        <form:input path="descripcion" type="text" class="form-control" />
                        <br>
                         <form:label path="stock" class="form-label">Stock:</form:label>
                        <form:input path="stock" type="number" class="form-control" />
                        <br> 
                    </form:form>

                    <br>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripcion Decoracion</th>
                                <th scope="col">Stock<th>
                            </tr>
                        </thead>
                        <tbody>
                            <c:forEach var="Decoracion" items="${listaDecoracion}">
                                <tr>
                                    <th scope="row">${Decoracion.id}</th>
                                    <td>${Decoracion.nombre}</td>
                                    <td>${Decoracion.descripcion}</td>
                                    <td>${Decoracion.stock}</td>
                                </tr>
                            </c:forEach>
                        </tbody>
                    </table>

                </div>
            </body>

            </html>