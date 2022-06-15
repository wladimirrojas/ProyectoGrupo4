package com.generation.models;

public class Estado_venta {

	private Integer id;
	private String nombre;
	private String comentario;
	
	public Estado_venta () {
		
	}

	public Estado_venta(Integer id, String nombre, String comentario) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.comentario = comentario;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
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
	
	
	
}
