package com.generation.models;

public class Sabor {

    private Integer id;
    private String nombre;
    private String descripcion;
    private Boolean disponible;
    private Integer stock;

    public Sabor() {
    }

    public Sabor(Integer id, String nombre, String descripcion, Boolean disponible, Integer stock) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.disponible = disponible;
        this.stock = stock;
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

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Boolean getDisponible() {
        return disponible;
    }

    public void setDisponible(Boolean disponible) {
        this.disponible = disponible;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    @Override
    public String toString() {
        return "Sabor [descripcion=" + descripcion + ", disponible=" + disponible + ", id=" + id + ", nombre=" + nombre
                + ", stock=" + stock + "]";
    }
}
