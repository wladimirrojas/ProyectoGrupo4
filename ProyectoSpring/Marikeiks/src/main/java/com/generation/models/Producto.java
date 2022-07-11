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

/*Entidad, nombre de tabla, y tipos de atributos*/
@Entity
@Table(name = "productos")
public class Producto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String descripcion;
	private Integer stock;
	private Integer precio;
	private Integer vegano;

	// Producto envia a Ventas_producto
	@OneToMany(mappedBy = "producto", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<VentaProducto> ventas_productos;

	// recibe desde tipo_producto
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "tipo_producto_id")
	private TipoProducto tipoProducto;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "decoracion_id")
	private Decoracion decoracion;

	/* columna extra de creación y actualización */
	@Column(updatable = false)
	private Date createdAt;
	private Date updatedAt;

	public Producto() {
		super();
	}

	public Producto(Long id, String descripcion, Integer stock, Integer precio, Integer vegano,
			List<VentaProducto> ventas_productos, TipoProducto tipo_producto, Decoracion decoracion) {
		super();
		this.id = id;
		this.descripcion = descripcion;
		this.stock = stock;
		this.precio = precio;
		this.vegano = vegano;
		this.ventas_productos = ventas_productos;
		this.tipoProducto = tipo_producto;
		this.decoracion = decoracion;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Integer getStock() {
		return stock;
	}

	public void setStock(Integer stock) {
		this.stock = stock;
	}

	public Integer getPrecio() {
		return precio;
	}

	public void setPrecio(Integer precio) {
		this.precio = precio;
	}

	public Integer getVegano() {
		return vegano;
	}

	public void setVegano(Integer vegano) {
		this.vegano = vegano;
	}

	public List<VentaProducto> getVentas_productos() {
		return ventas_productos;
	}

	public void setVentas_productos(List<VentaProducto> ventas_productos) {
		this.ventas_productos = ventas_productos;
	}

	public TipoProducto getTipo_producto() {
		return tipoProducto;
	}

	public void setTipo_producto(TipoProducto tipo_producto) {
		this.tipoProducto = tipo_producto;
	}

	public Decoracion getDecoracion() {
		return decoracion;
	}

	public void setDecoracion(Decoracion decoracion) {
		this.decoracion = decoracion;
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
