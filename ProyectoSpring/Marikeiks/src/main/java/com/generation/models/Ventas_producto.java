package com.generation.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

@Entity
@Table(name = "ventas_productos")
public class Ventas_producto {

	@Id
	private Long id;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "producto_id")
	private Producto producto;

	private Integer ventas_id;
	private Integer cantidad;
	private Integer precio_total;
	private Integer descuento;
	private Integer iva_total;

	@Column(updatable = false) // permite no actualizar desde el sistema
	private Date createdAt;
	private Date updatedAt;

	public Ventas_producto() {
		super();
	}

	public Ventas_producto(Long id, Producto producto, Integer ventas_id, Integer cantidad, Integer precio_total,
			Integer descuento, Integer iva_total) {
		super();
		this.id = id;
		this.producto = producto;
		this.ventas_id = ventas_id;
		this.cantidad = cantidad;
		this.precio_total = precio_total;
		this.descuento = descuento;
		this.iva_total = iva_total;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Producto getProducto() {
		return producto;
	}

	public void setProducto(Producto producto) {
		this.producto = producto;
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

	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}

}