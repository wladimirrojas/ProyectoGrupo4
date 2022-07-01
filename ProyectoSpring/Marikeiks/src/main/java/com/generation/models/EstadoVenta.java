package com.generation.models;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

@Entity
@Table (name="estados_ventas")
public class EstadoVenta {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nombre;
	private String comentario;
	
	//Relacion estado de venta y ventas
	@OneToMany
	(mappedBy="estadoVenta",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	 private List<Venta> ventas;
	
	
	//Atributos opcionales que sirven para la gestión de la base de datos.
		@Column(updatable=false)
		private Date createdAt;
		private Date updatedAt;
	
	public EstadoVenta () {
		
	}

	public EstadoVenta(String nombre, String comentario) {
		super();
		this.nombre = nombre;
		this.comentario = comentario;
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

	public String getComentario() {
		return comentario;
	}

	public void setComentario(String comentario) {
		this.comentario = comentario;
	}

	@Override
	public String toString() {
		return "Estado_venta [id=" + id + ", nombre=" + nombre + ", comentario=" + comentario + "]";
	}
	
	//Insertar en la base de datos las fechas correspondiente a la creación y edición del cliente.
	@PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }

	
}
