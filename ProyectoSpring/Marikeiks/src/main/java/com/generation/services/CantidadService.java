package com.generation.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.models.Cantidad;
import com.generation.repositories.CantidadRepository;

@Service
public class CantidadService{
	
	@Autowired
	CantidadRepository cantidadRepository;
	
	public void guardarCantidad(Cantidad cantidad) {
		cantidadRepository.save(cantidad);
	}
	
	public List<Cantidad> findAll(){
		return cantidadRepository.findAll();
	}
	
	public Cantidad buscarId(Long id) {
		return cantidadRepository.findById(id).get();
	}

	public void deleteById(Long id) {
		cantidadRepository.deleteById(id);
	}

}
