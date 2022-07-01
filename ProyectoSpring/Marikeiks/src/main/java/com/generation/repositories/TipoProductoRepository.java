package com.generation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.generation.models.TipoProducto;

@Repository
public interface TipoProductoRepository extends JpaRepository<TipoProducto, Long>{
    
}
