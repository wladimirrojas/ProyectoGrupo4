package com.generation.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.generation.models.Decoracion;
import com.generation.repositories.DecoracionRepository;

public class DecoracionService {
	@Autowired
		DecoracionRepository decoracionRepository;
		
		public void saveDecoracion(Decoracion decoracion) {
			decoracionRepository.save(decoracion);
			
		}

		public List<Decoracion> findAll() {
			return decoracionRepository.findAll();
		}

	}


