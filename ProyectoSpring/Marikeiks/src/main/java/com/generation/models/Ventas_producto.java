package com.generation.models;

public class Ventas_producto{
    private Integer productos_id;
    private Integer ventas_id;
    private Integer cantidad;
    private Integer precio_total;
    private Integer descuento;
    private Integer iva_total;
    
    public Ventas_producto() {
        super();
    }

    public Ventas_producto(Integer productos_id, Integer ventas_id, Integer cantidad, Integer precio_total,
            Integer descuento, Integer iva_total) {
        super();
        this.productos_id = productos_id;
        this.ventas_id = ventas_id;
        this.cantidad = cantidad;
        this.precio_total = precio_total;
        this.descuento = descuento;
        this.iva_total = iva_total;
    }

    public Integer getProductos_id() {
        return productos_id;
    }

    public void setProductos_id(Integer productos_id) {
        this.productos_id = productos_id;
    }

    public Integer getVentas_id() {
        return ventas_id;
    }

    public void setVentas_id(Integer ventas_id) {
        this.ventas_id = ventas_id;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Integer getPrecio_total() {
        return precio_total;
    }

    public void setPrecio_total(Integer precio_total) {
        this.precio_total = precio_total;
    }

    public Integer getDescuento() {
        return descuento;
    }

    public void setDescuento(Integer descuento) {
        this.descuento = descuento;
    }

    public Integer getIva_total() {
        return iva_total;
    }

    public void setIva_total(Integer iva_total) {
        this.iva_total = iva_total;
    }

    @Override
    public String toString() {
        return "Ventas_producto [cantidad=" + cantidad + ", descuento=" + descuento + ", iva_total=" + iva_total
                + ", precio_total=" + precio_total + ", productos_id=" + productos_id + ", ventas_id=" + ventas_id
                + "]";
    }

}