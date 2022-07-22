<%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
            <html>

            <head>
                <title>Editar Despacho/Retiro</title>
            </head>

            <body>

                <div>
                    <form:form action="/despachoRetiro/actualizar/${despachoRetiro.id}" method="post" modelAttribute="despachoRetiro">
                        <form:label path="estado">Estado de pedido :</form:label>
                        <form:input path="estado" />
                        <br>
                        <button type="submit">Guardar</button>

                    </form:form>
                </div>

            </body>

            </html>