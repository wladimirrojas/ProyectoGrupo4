package com.generation.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.models.Venta;
import com.generation.repositories.VentaRepository;

@Service
public class VentaService {
	@Autowired
	VentaRepository ventaRepository;

	public void saveVenta(Venta venta) {
		ventaRepository.save(venta);

	}

	public List<Venta> findAll() {
		return ventaRepository.findAll();
	}

}