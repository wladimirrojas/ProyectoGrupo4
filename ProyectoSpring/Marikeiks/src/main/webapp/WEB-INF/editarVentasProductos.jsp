<%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
            <html>

            <head>
                <title>Edittar Cliente</title>
            </head>

            <body>

                <div>
                    <form:form action="/ventasProducto/actualizar/${ventasProducto.id}" method="post" modelAttribute="ventasProducto">
                        <form:label path="ventas_id">ID de Venta :</form:label>
                        <form:input type="number" path="ventas_id" />
                        <br>
                        <form:label path="cantidad">Apellido Cliente:</form:label>
                        <form:input type="number" path="cantidad" />
                        <br>
                        <form:label path="precio_total">Precio TOTAL :</form:label>
                        <form:input type="number" path="precio_total" />
                        <br>
                        <form:label path="descuento">Descuento Aplicado :</form:label>
                        <form:input type="number" path="descuento" />
                        <br>
                        <form:label path="iva_total">IVA :</form:label>
                        <form:input type="number" path="iva_total" />
                        <br>
                        <button type="submit">Guardar</button>


                    </form:form>
                </div>

            </body>

            </html>