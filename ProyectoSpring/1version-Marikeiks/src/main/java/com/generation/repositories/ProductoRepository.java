package com.generation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.generation.models.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long>{

}
