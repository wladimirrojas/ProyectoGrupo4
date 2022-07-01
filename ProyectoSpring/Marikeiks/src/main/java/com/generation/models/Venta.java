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
@Table (name="ventas")
public class Venta {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Date fecha_emision;
	private Date fecha_entrega;
	private Integer subtotal;
	private String comentario;
	private Integer iva_subtotal;
	private Integer cliente_id;
	private Integer estado_ventas_id;
	private Integer despacho_retiros_id;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="cliente_id")
	private Cliente cliente;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="estado_ventas_id")
	private EstadoVenta estadoVenta;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="despacho_retiros_id")
	private DespachoRetiro despachoRetiro;


	@Column(updatable = false) // permite no actualizar desde el sistema
	private Date createdAt;
	private Date updatedAt;
	
	public Venta() {
		super();
	}

	public Venta(Long id, Date fecha_emision, Date fecha_entrega, Integer subtotal, String comentario,
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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
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

	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
	
	
	
	
}
