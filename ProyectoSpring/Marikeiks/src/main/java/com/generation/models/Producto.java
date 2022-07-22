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

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

/*Entidad, nombre de tabla, y tipos de atributos*/
@Entity
@Table(name = "productos")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Producto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nombre;
	private String descripcion;
	private Integer stock;
	private Integer precio;
	private Integer vegano;
	private String url;

	// Producto envia a Ventas_producto
	@OneToMany(mappedBy = "producto", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<VentaProducto> ventas_productos;

	// recibe desde tipo_producto
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "tipo_producto_id")
	private TipoProducto tipoProducto; // listo

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "decoracion_id")
	private Decoracion decoracion;

	// Recibe la foranea de sabores
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "sabores_id")
	private Sabor sabor;

	// Recibe la foranea de cantidades
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cantidades_id")
	private Cantidad cantidad;

	/* columna extra de creación y actualización */
	@Column(updatable = false)
	private Date createdAt;
	private Date updatedAt;

	public Producto() {
		super();
	}

	public Producto(Long id, String nombre, String descripcion, Integer stock, Integer precio, Integer vegano,
			String url, TipoProducto tipoProducto, Decoracion decoracion, Sabor sabor, Cantidad cantidad) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.stock = stock;
		this.precio = precio;
		this.vegano = vegano;
		this.url = url;
		this.tipoProducto = tipoProducto;
		this.decoracion = decoracion;
		this.sabor = sabor;
		this.cantidad = cantidad;
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

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public TipoProducto getTipoProducto() {
		return tipoProducto;
	}

	public void setTipoProducto(TipoProducto tipoProducto) {
		this.tipoProducto = tipoProducto;
	}

	public Decoracion getDecoracion() {
		return decoracion;
	}

	public void setDecoracion(Decoracion decoracion) {
		this.decoracion = decoracion;
	}

	public Sabor getSabor() {
		return sabor;
	}

	public void setSabor(Sabor sabor) {
		this.sabor = sabor;
	}

	public Cantidad getCantidad() {
		return cantidad;
	}

	public void setCantidad(Cantidad cantidad) {
		this.cantidad = cantidad;
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
