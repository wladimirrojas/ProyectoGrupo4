package com.generation.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

@Entity
@Table(name = "ventas_productos")
public class VentaProducto {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "producto_id")
	private Producto producto;
		
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "venta_id")
	private Venta venta;

	private Integer ventas_id;
	private Integer cantidad;
	private Integer subtotal;
	private Integer descuento;
	private Integer iva_total; // Pendiente

	@Column(updatable = false) // permite no actualizar desde el sistema
	private Date createdAt;
	private Date updatedAt;

	public VentaProducto() {
		super();
	}
	
	public VentaProducto(Producto producto, Venta venta, Integer ventas_id, Integer cantidad, Integer subtotal,
			Integer descuento, Integer iva_total) {
		super();
		this.producto = producto;
		this.venta = venta;
		this.ventas_id = ventas_id;
		this.cantidad = cantidad;
		this.subtotal = subtotal;
		this.descuento = descuento;
		this.iva_total = iva_total;
	}

	public Venta getVenta() {
		return venta;
	}

	public void setVenta(Venta venta) {
		this.venta = venta;
	}

	public Integer getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(Integer subtotal) {
		this.subtotal = subtotal;
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

	public Integer getsubtotal() {
		return subtotal;
	}

	public void setsubtotal(Integer subtotal) {
		this.subtotal = subtotal;
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