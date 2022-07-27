package com.generation.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.generation.models.Cliente;
import com.generation.services.ClienteService;

@Controller
@RequestMapping("/admin/cliente")
public class ClienteController {

	@Autowired
	ClienteService clienteService;

	// Ruta inicio cliente
	@RequestMapping("")
	public String cliente(@ModelAttribute("cliente") Cliente cliente) {
		return "cliente.jsp";
	}

	// Ruta guardar cliente
	@RequestMapping("/guardarCliente")
	public String guardarCliente(@ModelAttribute("cliente") Cliente cliente, Model model) {

		// método para guardar los datos del cliente
		clienteService.saveCliente(cliente);
		// guardar los datos en una lista a través del método findAll
		List<Cliente> listaClientes = clienteService.findAll();
		// enviar los datos al jsp mediante model.addAttribute
		model.addAttribute("listaClientes", listaClientes);

		// devolver a la pagina de inicio cliente
		return "redirect:/cliente";

	}
}