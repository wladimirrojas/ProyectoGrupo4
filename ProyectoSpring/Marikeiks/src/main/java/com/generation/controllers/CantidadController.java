package com.generation.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.generation.models.Cantidad;
import com.generation.services.CantidadService;

@Controller
@RequestMapping("/admin/cantidad")
public class CantidadController {

	@Autowired
	CantidadService cantidadService;

	@RequestMapping("")
	public String despliegue(Model model) {
		Cantidad cantidad = new Cantidad();
		model.addAttribute("cantidad", cantidad);

		List<Cantidad> listaCantidades = cantidadService.findAll();
		model.addAttribute("listaCantidades", listaCantidades);

		return "";
	}

	@PostMapping("/guardar")
	public String guardarCantidad(@ModelAttribute("cantidad") Cantidad cantidad) {
		cantidadService.guardarCantidad(cantidad);
		return "";
	}
}
