package com.generation.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.models.Decoracion;
import com.generation.repositories.DecoracionRepository;

@Service
public class DecoracionService {
	@Autowired
	DecoracionRepository decoracionRepository;
		
		public void saveDecoracion(Decoracion decoracion) {
			decoracionRepository.save(decoracion);
			
		}

		public List<Decoracion> findAll() {
			return decoracionRepository.findAll();
		}

		//Cambios CATA
		public void eliminarDecoracion(Long id) {
			decoracionRepository.deleteById(id);
		}



}


