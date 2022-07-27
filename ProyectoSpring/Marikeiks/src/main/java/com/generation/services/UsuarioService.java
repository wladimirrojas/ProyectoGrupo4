package com.generation.services;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.models.Usuario;
import com.generation.repositories.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	UsuarioRepository usuarioRepository;

	public boolean validarUsuario(String email, String password) {
		boolean error = true;
		// verificar el email
		Usuario existeUsuario = usuarioRepository.findByEmail(email);
		if (existeUsuario == null) {//no existe el usuario, error de ingreso
			error = true;
		}else {
			// verificar password contra password base datos desencriptada
			if(BCrypt.checkpw(password, existeUsuario.getPassword())) {
				//password iguales, email y password igual a la base datos
				error= false;
			}else {
				//password distintos, error 
				error = true;
			}
		}
		return error;
	}

}
