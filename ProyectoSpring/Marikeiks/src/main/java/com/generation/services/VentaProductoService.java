package com.generation.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.generation.models.VentaProducto;
import com.generation.repositories.VentaProductoRep;

public class VentaProductoService{
	
	@Autowired
	VentaProductoRep ventaProductoRep;
	
	public void guardarVentaProducto(VentaProducto ventaProducto) {	
		
		ventaProductoRep.save(ventaProducto);
	}
}
