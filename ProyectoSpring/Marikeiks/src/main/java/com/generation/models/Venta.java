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
@Table(name = "ventas")
public class Venta {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Date fecha_emision;
	private Date fecha_entrega;
	private Integer subtotal;
	private String comentario;
	private Integer iva_subtotal;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cliente_id")
	private Cliente cliente;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "estado_ventas_id")
	private EstadoVenta estadoVenta;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "despacho_retiros_id")
	private DespachoRetiro despachoRetiro;

	@Column(updatable = false) // permite no actualizar desde el sistema
	private Date createdAt;
	private Date updatedAt;

	public Venta() {
		super();
	}

	public Venta(Long id, Date fecha_emision, Date fecha_entrega, Integer subtotal, String comentario,
			Integer iva_subtotal) {
		super();
		this.id = id;
		this.fecha_emision = fecha_emision;
		this.fecha_entrega = fecha_entrega;
		this.subtotal = subtotal;
		this.comentario = comentario;
		this.iva_subtotal = iva_subtotal;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public EstadoVenta getEstadoVenta() {
		return estadoVenta;
	}

	public void setEstadoVenta(EstadoVenta estadoVenta) {
		this.estadoVenta = estadoVenta;
	}

	public DespachoRetiro getDespachoRetiro() {
		return despachoRetiro;
	}

	public void setDespachoRetiro(DespachoRetiro despachoRetiro) {
		this.despachoRetiro = despachoRetiro;
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

	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}

}
