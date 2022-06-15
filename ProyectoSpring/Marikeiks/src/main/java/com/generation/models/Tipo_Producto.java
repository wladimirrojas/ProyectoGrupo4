package com.generation.models;

public class Tipo_Producto {

    private Integer id;
    private String nombre;
    private Integer porcion_cantidad;
    private Integer sabores_id;

    public Tipo_Producto() {
    }

    public Tipo_Producto(Integer id, String nombre, Integer porcion_cantidad, Integer sabores_id) {
        this.id = id;
        this.nombre = nombre;
        this.porcion_cantidad = porcion_cantidad;
        this.sabores_id = sabores_id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getPorcion_cantidad() {
        return porcion_cantidad;
    }

    public void setPorcion_cantidad(Integer porcion_cantidad) {
        this.porcion_cantidad = porcion_cantidad;
    }

    public Integer getSabores_id() {
        return sabores_id;
    }

    public void setSabores_id(Integer sabores_id) {
        this.sabores_id = sabores_id;
    }

    @Override
    public String toString() {
        return "Tipo_Producto [id=" + id + ", nombre=" + nombre + ", porcion_cantidad=" + porcion_cantidad
                + ", sabores_id=" + sabores_id + "]";
    }
}
