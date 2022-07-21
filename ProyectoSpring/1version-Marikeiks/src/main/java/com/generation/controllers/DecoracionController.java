package com.generation.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.generation.models.Decoracion;
import com.generation.services.DecoracionService;
@Controller
@RequestMapping("/decoracion")
public class DecoracionController {

	@Autowired
	DecoracionService decoracionService;
	
	//Ruta inicio
	@RequestMapping("")
	public String decoracion(@ModelAttribute ("decoracion") Decoracion decoracion) {
	return "Decoracion.jsp";
	}
	
	
	//Ruta para guardar los estados de ventas
	@RequestMapping("/guardarDecoracion")
	public String guardarDecoracion(@ModelAttribute("decoracion") Decoracion decoracion, Model model) {
		
		//método para guardar los estados de ventas
		decoracionService.saveDecoracion(decoracion);
		//guardar los estados ingresados en una lista a través del método findAll
		List<Decoracion> listaDecoracion = decoracionService.findAll();
		//enviar los datos al jsp mediante model.addAttribute
		model.addAttribute("listaDecoracion", listaDecoracion);
		
		//devolver a la página de inicio estados de ventas
		return "redirect:/decoracion";
	}
}
