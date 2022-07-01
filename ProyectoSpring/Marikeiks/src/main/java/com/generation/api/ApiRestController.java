package com.generation.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.models.Producto;
import com.generation.models.Sabor;
import com.generation.services.ProductoService;
import com.generation.services.SaborService;

@RestController
@RequestMapping("/api/obtener")
public class ApiRestController {

	Producto producto;

	@Autowired
	ProductoService productoService;

	@Autowired
	SaborService saborService;

	@RequestMapping("/productos")
	public List<Producto> obtenerProductos() {

		List<Producto> listaProductos = productoService.findAll();
		return listaProductos;
	}

	@RequestMapping("/sabores")
	public List<Sabor> obtenerSabores() {

		return saborService.findAll();
	}
}
