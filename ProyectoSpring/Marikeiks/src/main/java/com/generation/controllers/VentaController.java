package com.generation.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.generation.models.Venta;
import com.generation.services.VentaService;

@Controller
@RequestMapping("/admin/venta")
public class VentaController {
	@Autowired
	VentaService ventaService;

	// Ruta inicio
	@RequestMapping("")
	public String venta(@ModelAttribute("Venta") Venta venta) {
		return "Venta.jsp";
	}

	// Ruta guardar
	@RequestMapping("/guardarVenta")
	public String guardarVenta(@ModelAttribute("Venta") Venta venta, Model model) {

		// método para guardar los estados de ventas
		ventaService.saveVenta(venta);

		// guardar los estados ingresados en una lista a través del método findAll
		List<Venta> listaVenta = ventaService.findAll();

		// enviar los datos al jsp mediante model.addAttribute
		model.addAttribute("listaVentas", listaVenta);

		// devolver a la página de inicio estados de ventas
		return "redirect:/venta";

	}

}
