package com.generation.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.generation.models.DespachoRetiro;
import com.generation.models.Producto;
import com.generation.services.DespachoRetiroService;


@Controller
@RequestMapping("/despachoRetiro")

public class DespachoRetiroController {
    
    @Autowired
	DespachoRetiroService despachoRetiroService;
    
    @RequestMapping("")
	public String despliegue(Model model) {
		model.addAttribute("despachoRetiro", new DespachoRetiro());
		
		List<DespachoRetiro> listaDespachoRetiro = despachoRetiroService.findAll();
		model.addAttribute("listaDespachoRetiro", listaDespachoRetiro);		
		
		return "despachoRetiro.jsp";
	}
	
	@PostMapping("/guardar")
	public String guardarProducto(@Valid @ModelAttribute("despachoRetiro")DespachoRetiro despachoRetiro ) {
		despachoRetiroService.saveDespachoRetiro(despachoRetiro);
		return "";
	}

}


public void saveDespachoRetiro(@Valid DespachoRetiro despachoRetiro) {
    despachoRetiroRepository.save(despachoRetiro);
    }

    public List<DespachoRetiro> findAll() {
        return despachoRetiroRepository.findAll();
    }

    public DespachoRetiro findId(Long id) {
        return despachoRetiroRepository.findById(id).get();
    }

    public void eliminarDespachoRetiro(Long id) {
        despachoRetiroRepository.deleteById(id);
