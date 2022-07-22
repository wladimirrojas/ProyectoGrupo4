package com.generation.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "cantidades")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Cantidad {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Integer porcion;

	@OneToMany(mappedBy = "cantidad", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Producto> productos;

	public Cantidad() {
	}

	public Cantidad(Long id, Integer porcion) {
		super();
		this.id = id;
		this.porcion = porcion;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getPorcion() {
		return porcion;
	}

	public void setPorcion(Integer porcion) {
		this.porcion = porcion;
	}

}
