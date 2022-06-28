package com.generation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.generation.models.Cliente;

//Podemos acceder a los métodos de JpaRepository
@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
