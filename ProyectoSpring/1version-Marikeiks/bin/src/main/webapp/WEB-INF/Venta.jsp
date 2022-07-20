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
                    <form:form action="/venta/guardarVenta" method="post" modelAttribute="venta">
                        <form:label path="fecha_emision" class="form-label">Fecha Emision:</form:label>
                        <form:input path="fecha_emision" type="date"class="form-control" />
                        <br>
                        <form:label path="fecha_entrega" class="form-label">Cantidad o Porciones:</form:label>
                        <form:input path="fecha_entrega" type="date" class="form-control" />
                        <br>
                    </form:form>

                    <br>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Fecha de Emision</th>
                                <th scope="col">Fecha de Entrega</th>
                            </tr>
                        </thead>
                        <tbody>
                            <c:forEach var="fechaEmision" items="${listaVenta}">
                                <tr>
                                    <th scope="row">${Venta.id}</th>
                                    <td>${venta.fecha_emision}</td>
                                    <td>${venta.fecha_entrega}</td>
                                </tr>
                            </c:forEach>
                        </tbody>
                    </table>

                </div>
            </body>

            </html>