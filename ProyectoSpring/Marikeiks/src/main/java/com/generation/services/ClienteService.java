package com.generation.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.models.Cliente;
import com.generation.repositories.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	ClienteRepository clienteRepository;
	
	public void saveCliente(Cliente cliente) {
		clienteRepository.save(cliente);
		
	}

	public List<Cliente> findAll() {
		return clienteRepository.findAll();
	}

	
	
}
