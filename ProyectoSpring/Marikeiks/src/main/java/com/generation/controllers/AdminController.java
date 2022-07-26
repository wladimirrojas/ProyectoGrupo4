package com.generation.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.generation.services.UsuarioService;

@Controller
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	UsuarioService usuarioService;

	@RequestMapping("")
	public String login() {
		return "login.jsp";
	}

	@RequestMapping("/inicio")
	public String inicio(@RequestParam(value = "email") String email, @RequestParam(value = "password") String password,
			Model model, HttpSession session) {

		if (email == null || password == null || email.isEmpty() || password.isEmpty()) {
			model.addAttribute("msgError", "Todos los campos son obligatorios");
			return "login.jsp";
		}
		// si es true, indica que hay un error el bd
		boolean usuarioValidado = usuarioService.validarUsuario(email, password);

		if (usuarioValidado) {
			model.addAttribute("msgError", "Error en el ingreso al sistema");
			return "login.jsp";
		} else {
			// no hay error, puede ingresar al sistema
			session.setAttribute("email", email);
			return "controladorAdmin.jsp";
		}

	}
}
