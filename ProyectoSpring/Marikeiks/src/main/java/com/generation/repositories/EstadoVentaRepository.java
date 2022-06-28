package com.generation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.generation.models.EstadoVenta;

@Repository
public interface EstadoVentaRepository extends JpaRepository<EstadoVenta, Long>{

}
