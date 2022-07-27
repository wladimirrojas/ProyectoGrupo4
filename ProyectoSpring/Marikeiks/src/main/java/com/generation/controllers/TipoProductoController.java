package com.generation.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.generation.models.TipoProducto;
import com.generation.services.TipoProductoService;

@Controller
@RequestMapping("/admin/tipoProducto")
public class TipoProductoController {

	@Autowired
	TipoProductoService tipoProductoService;

	@RequestMapping("")
	public String ingreso(Model model) {
		TipoProducto tipoProducto = new TipoProducto();
		model.addAttribute("tipoProducto", tipoProducto);

		List<TipoProducto> listaTipoProductos = tipoProductoService.findAll();
		model.addAttribute("listaTipoProductos", listaTipoProductos);

		return "tipoProducto.jsp";
	}

	@RequestMapping("/guardar")
	public String guardarTipo_producto(@Valid @ModelAttribute("tipoProducto") TipoProducto tipoProducto) {

		tipoProductoService.saveTipoProducto(tipoProducto);
		return "redirect:/tipoProducto";
	}

}
