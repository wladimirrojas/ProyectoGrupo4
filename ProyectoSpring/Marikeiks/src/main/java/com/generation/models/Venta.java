package com.generation.models;

import java.util.Date;

public class Venta {
	private Integer id;
	private Date fecha_emision;
	private Date fecha_entrega;
	private Integer subtotal;
	private String comentario;
	private Integer iva_subtotal;
	private Integer cliente_id;
	private Integer estado_ventas_id;
	private Integer despacho_retiros_id;
	
	public Venta() {
		super();
	}

	public Venta(Integer id, Date fecha_emision, Date fecha_entrega, Integer subtotal, String comentario,
			Integer iva_subtotal, Integer cliente_id, Integer estado_ventas_id, Integer despacho_retiros_id) {
		super();
		this.id = id;
		this.fecha_emision = fecha_emision;
		this.fecha_entrega = fecha_entrega;
		this.subtotal = subtotal;
		this.comentario = comentario;
		this.iva_subtotal = iva_subtotal;
		this.cliente_id = cliente_id;
		this.estado_ventas_id = estado_ventas_id;
		this.despacho_retiros_id = despacho_retiros_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getFecha_emision() {
		return fecha_emision;
	}

	public void setFecha_emision(Date fecha_emision) {
		this.fecha_emision = fecha_emision;
	}

	public Date getFecha_entrega() {
		return fecha_entrega;
	}

	public void setFecha_entrega(Date fecha_entrega) {
		this.fecha_entrega = fecha_entrega;
	}

	public Integer getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(Integer subtotal) {
		this.subtotal = subtotal;
	}

	public String getComentario() {
		return comentario;
	}

	public void setComentario(String comentario) {
		this.comentario = comentario;
	}

	public Integer getIva_subtotal() {
		return iva_subtotal;
	}

	public void setIva_subtotal(Integer iva_subtotal) {
		this.iva_subtotal = iva_subtotal;
	}

	public Integer getCliente_id() {
		return cliente_id;
	}

	public void setCliente_id(Integer cliente_id) {
		this.cliente_id = cliente_id;
	}

	public Integer getEstado_ventas_id() {
		return estado_ventas_id;
	}

	public void setEstado_ventas_id(Integer estado_ventas_id) {
		this.estado_ventas_id = estado_ventas_id;
	}

	public Integer getDespacho_retiros_id() {
		return despacho_retiros_id;
	}

	public void setDespacho_retiros_id(Integer despacho_retiros_id) {
		this.despacho_retiros_id = despacho_retiros_id;
	}

	@Override
	public String toString() {
		return "Venta [id=" + id + ", fecha_emision=" + fecha_emision + ", fecha_entrega=" + fecha_entrega
				+ ", subtotal=" + subtotal + ", comentario=" + comentario + ", iva_subtotal=" + iva_subtotal
				+ ", cliente_id=" + cliente_id + ", estado_ventas_id=" + estado_ventas_id + ", despacho_retiros_id="
				+ despacho_retiros_id + "]";
	}
	
	
	
	
}
