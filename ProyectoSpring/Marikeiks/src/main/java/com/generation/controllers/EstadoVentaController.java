package com.generation.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.generation.models.EstadoVenta;
import com.generation.services.EstadoVentaService;

@Controller
@RequestMapping("/admin/estadoVenta")
public class EstadoVentaController {

	@Autowired
	EstadoVentaService estadoVentaService;
	
	//Ruta inicio estado de ventas
	@RequestMapping("")
	public String estadoVenta(@ModelAttribute ("estadoVenta") EstadoVenta estadoVenta) {
	return "estadoVenta.jsp";
	}
	
	
	//Ruta para guardar los estados de ventas
	@RequestMapping("/guardarEstado")
	public String guardarEstado(@ModelAttribute("estadoVenta") EstadoVenta estadoVenta, Model model) {
		
		//método para guardar los estados de ventas
		estadoVentaService.saveEstadoVenta(estadoVenta);
		//guardar los estados ingresados en una lista a través del método findAll
		List<EstadoVenta> listaEstados = estadoVentaService.findAll();
		//enviar los datos al jsp mediante model.addAttribute
		model.addAttribute("listaEstados", listaEstados);
		
		//devolver a la página de inicio estados de ventas
		return "redirect:/estadoVenta";
		
	}
	
}
