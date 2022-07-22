<%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
            <html>

            <head>
                <title>Title</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
            </head>

            <body>
                <div class="container">

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID</th>
                                <th scope="col">ID de Venta</th>
                                <th scope="col">Cantidad de Productos</th>
                                <th scope="col">Precio TOTAL</th>
                                <th scope="col">Descuento Aplicado</th>
                                <th scope="col">IVA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <c:forEach var="cliente" items="${listaCliente}">
                                <tr>
                                    <th>id</th>
                                    <th scope="row">${ventasProducto.ventas_id}</th>
                                    <td>${ventasProducto.cantidad}</td>
                                    <td>${ventasProducto.precio_total}</td>
                                    <td>${ventasProducto.descuento}</td>
                                    <td>${ventasProducto.iva_total}</td>
                                    <td><a class="btn btn-warning" href="/ventasProducto/editar/${ventasProducto.id}" role="button">Editar</a></td>
                                    <td><a class="btn btn-danger" href="/ventasProducto/eliminar/${ventasProducto.id}" role="button">Eliminar</a></td>
                                </tr>
                            </c:forEach>
                        </tbody>
                    </table>
                </div>
            </body>

            </html>