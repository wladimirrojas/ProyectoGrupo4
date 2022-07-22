<%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
            <html>

            <head>
                <title>Datos de despacho/Retiro</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
            </head>

            <body>
                <div class="container">

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID</th>
                                <th scope="col">Estado de pedido</th>
                            </tr>
                        </thead>
                        <tbody>
                            <c:forEach var="cliente" items="${listaCliente}">
                                <tr>
                                    <th>id</th>
                                    <th scope="row">${despachoRetiro.id}</th>
                                    <td>${despachoRetiro.estado}</td>
                                    <td><a class="btn btn-warning" href="/cliente/editar/${despachoRetiro.id}" role="button">Editar</a></td>
                                    <td><a class="btn btn-danger" href="/cliente/eliminar/${despachoRetiro.id}" role="button">Eliminar</a></td>
                                </tr>
                            </c:forEach>
                        </tbody>
                    </table>
                </div>
            </body>

            </html>