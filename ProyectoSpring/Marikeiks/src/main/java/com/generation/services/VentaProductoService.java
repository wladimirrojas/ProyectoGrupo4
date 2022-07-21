package com.generation.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.models.VentaProducto;
import com.generation.repositories.VentaProductoRep;

@Service
public class VentaProductoService{
	
	@Autowired
	VentaProductoRep ventaProductoRep;
	
	public void guardarVentaProducto(VentaProducto ventaProducto) {	
		
		ventaProductoRep.save(ventaProducto);
	}
}
