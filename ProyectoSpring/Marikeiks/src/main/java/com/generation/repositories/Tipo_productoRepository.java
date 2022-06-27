package com.generation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.generation.models.Tipo_producto;

@Repository
public interface Tipo_productoRepository extends JpaRepository<Tipo_producto, Long>{
    
}
