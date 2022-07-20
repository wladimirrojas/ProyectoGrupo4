package com.generation.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.generation.models.EstadoVenta;
import com.generation.repositories.EstadoVentaRepository;

@Service
public class EstadoVentaService {

	@Autowired
	EstadoVentaRepository estadoVentaRepository;
	
	public void saveEstadoVenta(EstadoVenta estadoVenta) {
		estadoVentaRepository.save(estadoVenta);
		
	}

	public List<EstadoVenta> findAll() {
		return estadoVentaRepository.findAll();
	}

}
