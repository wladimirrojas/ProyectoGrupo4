package com.generation.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.generation.models.Cantidad;
import com.generation.models.Decoracion;
import com.generation.models.Producto;
import com.generation.models.Sabor;
import com.generation.models.TipoProducto;
import com.generation.services.CantidadService;
import com.generation.services.DecoracionService;
import com.generation.services.ProductoService;
import com.generation.services.SaborService;
import com.generation.services.TipoProductoService;

@Controller
@RequestMapping("/admin/producto")
public class ProductoController {

	@Autowired
	ProductoService productoService;

	@Autowired
	TipoProductoService tipoProductoService;

	@Autowired
	DecoracionService decoracionService;

	@Autowired
	SaborService saborService;

	@Autowired
	CantidadService cantidadService;

	@RequestMapping("")
	public String despliegue(Model model) {
		model.addAttribute("producto", new Producto());

		List<Producto> listaProductos = productoService.findAll();
		model.addAttribute("listaProductos", listaProductos);

		List<TipoProducto> listaTipoProductos = tipoProductoService.findAll();
		model.addAttribute("listaTipoProductos", listaTipoProductos);

		List<Decoracion> listaDecoraciones = decoracionService.findAll();
		model.addAttribute("listaDecoraciones", listaDecoraciones);

		List<Sabor> listaSabores = saborService.findAll();
		model.addAttribute("listaSabores", listaSabores);

		List<Cantidad> listaCantidades = cantidadService.findAll();
		model.addAttribute("listaCantidades", listaCantidades);

		return "producto.jsp";
	}

	@RequestMapping("/guardar")
	public String guardarProducto(@Valid @ModelAttribute("producto") Producto producto) {
		productoService.guardarProducto(producto);
		return "redirect:/admin/producto";
	}

	@RequestMapping("/editar/{id}") // editar para el despliegue
	public String editar(@PathVariable("id") Long id, Model model) {

		Producto producto = productoService.buscarId(id);
		model.addAttribute("producto", producto);// pasar al jsp

		List<TipoProducto> listaTipoProductos = tipoProductoService.findAll();
		model.addAttribute("listaTipoProductos", listaTipoProductos);

		List<Decoracion> listaDecoraciones = decoracionService.findAll();
		model.addAttribute("listaDecoraciones", listaDecoraciones);

		List<Sabor> listaSabores = saborService.findAll();
		model.addAttribute("listaSabores", listaSabores);

		List<Cantidad> listaCantidades = cantidadService.findAll();
		model.addAttribute("listaCantidades", listaCantidades);

		return "editarProducto.jsp";// redireccionar a otra url o path
	}
	
	@RequestMapping("/eliminar/{id}")
	public String eliminar(@PathVariable("id") Long id, Model model) {
		
		productoService.eliminarPorId(id);
		
		return "redirect:/admin/producto";
	}

}
