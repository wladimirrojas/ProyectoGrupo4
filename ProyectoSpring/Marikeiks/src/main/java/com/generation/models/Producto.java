package com.generation.models;

public class Producto {

	private Integer id;
	private String descripcion;
	private Integer stock;
	private Integer precio;
	private Integer vegano;
	private Integer tipo_producto_id;
	private Integer decoraciones_id;

	public Producto() {
		super();
	}

	public Producto(Integer id, String descripcion, Integer stock, Integer precio, Integer vegano,
			Integer tipo_producto_id, Integer decoraciones_id) {
		super();
		this.id = id;
		this.descripcion = descripcion;
		this.stock = stock;
		this.precio = precio;
		this.vegano = vegano;
		this.tipo_producto_id = tipo_producto_id;
		this.decoraciones_id = decoraciones_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
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

	public Integer getTipo_producto_id() {
		return tipo_producto_id;
	}

	public void setTipo_producto_id(Integer tipo_producto_id) {
		this.tipo_producto_id = tipo_producto_id;
	}

	public Integer getDecoraciones_id() {
		return decoraciones_id;
	}

	public void setDecoraciones_id(Integer decoraciones_id) {
		this.decoraciones_id = decoraciones_id;
	}

	@Override
	public String toString() {
		return "Producto [id=" + id + ", descripcion=" + descripcion + ", stock=" + stock + ", precio=" + precio
				+ ", vegano=" + vegano + ", tipo_producto_id=" + tipo_producto_id + ", decoraciones_id="
				+ decoraciones_id + "]";
	}
}
