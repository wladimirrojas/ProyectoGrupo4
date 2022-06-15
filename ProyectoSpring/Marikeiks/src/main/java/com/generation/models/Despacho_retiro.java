package com.generation.models;

public class Despacho_retiro {
    private Integer id;
    private String estado;
    
    public Despacho_retiro() {
        super();
    }

    public Despacho_retiro(Integer id, String estado) {
        super();
        this.id = id;
        this.estado = estado;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    @Override
    public String toString() {
        return "Despacho_retiro [estado=" + estado + ", id=" + id + "]";
    }

}
