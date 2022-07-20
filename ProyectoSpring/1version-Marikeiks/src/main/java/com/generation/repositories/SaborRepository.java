package com.generation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.generation.models.Sabor;

@Repository
public interface SaborRepository extends JpaRepository<Sabor, Long>{
    
}
