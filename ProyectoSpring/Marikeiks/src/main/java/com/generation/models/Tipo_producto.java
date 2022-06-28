package com.generation.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "tipo_productos")

public class Tipo_producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String nombre;

    private Integer porcion_cantidad;

    private Integer sabores_id;

    public Tipo_producto() {
    }

    public Tipo_producto(String nombre, Integer porcion_cantidad, @NotNull Integer sabores_id) {
        this.nombre = nombre;
        this.porcion_cantidad = porcion_cantidad;
        this.sabores_id = sabores_id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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
