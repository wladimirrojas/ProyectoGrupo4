package com.generation.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.generation.models.Producto;
import com.generation.services.ProductoService;

@Controller
@RequestMapping("/admin/producto")
public class ProductoController {

	@Autowired
	ProductoService productoService;

	@RequestMapping("")
	public String despliegue(Model model) {
		model.addAttribute("producto", new Producto());
		
		List<Producto> listaProductos = productoService.findAll();
		model.addAttribute("listaProductos", listaProductos);		
		
		return "producto.jsp";
	}
	
	@PostMapping("/guardar")
	public String guardarProducto(@Valid @ModelAttribute("producto") Producto producto) {
		productoService.guardarProducto(producto);
		return "producto.jsp";
	}
}
