package com.generation.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "sabores")

public class Sabor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull()
    private String nombre;

    private String descripcion;
    private Boolean disponible;
    private Integer stock;

    @OneToMany(mappedBy = "sabor", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<TipoProducto> tipoProductos;

    public Sabor() {
    }

    public Sabor(@NotNull String nombre, String descripcion, Boolean disponible, Integer stock) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.disponible = disponible;
        this.stock = stock;
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
