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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

@Entity
@Table(name = "tipo_productos")

public class TipoProducto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String nombre;

	private Integer porcion_cantidad;

	private Integer sabores_id;

	// Tipo_producto envía a Producto
	@OneToMany(mappedBy = "tipo_producto", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Producto> productos;

	//Recibe la foranea de sabores
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "sabores_id")
	private Sabor sabor;

	@Column(updatable = false) // permite no actualizar desde el sistema
	private Date createdAt;
	private Date updatedAt;

	public TipoProducto() {
	}

	public TipoProducto(Long id, String nombre, Integer porcion_cantidad, Integer sabores_id,
			List<Producto> productos) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.porcion_cantidad = porcion_cantidad;
		this.sabores_id = sabores_id;
		this.productos = productos;
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

	public List<Producto> getProductos() {
		return productos;
	}

	public void setProductos(List<Producto> productos) {
		this.productos = productos;
	}

	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}

}
