package com.generation.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.models.Tipo_producto;
import com.generation.repositories.Tipo_productoRepository;

@Service
public class Tipo_productoService {
    
    @Autowired
    Tipo_productoRepository tipo_productoRepository;

    public void saveTipo_producto(@Valid Tipo_producto tipo_producto){
        tipo_productoRepository.save(tipo_producto);
    }

    public List<Tipo_producto> findAll() {
        return tipo_productoRepository.findAll();
    }

}
