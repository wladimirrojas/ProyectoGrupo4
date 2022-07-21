package com.generation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.generation.models.Decoracion;
@Repository
public interface DecoracionRepository extends JpaRepository<Decoracion, Long> {
}



