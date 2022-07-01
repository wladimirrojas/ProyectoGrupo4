package com.generation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.generation.models.Venta;
	
@Repository
	public interface VentaRepository extends JpaRepository<Venta, Long>{

	}


