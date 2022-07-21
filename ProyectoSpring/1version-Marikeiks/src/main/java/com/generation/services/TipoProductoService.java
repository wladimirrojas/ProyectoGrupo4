package com.generation.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.models.TipoProducto;
import com.generation.repositories.TipoProductoRepository;

@Service
public class TipoProductoService {
    
    @Autowired
    TipoProductoRepository tipoProductoRepository;

    public void saveTipoProducto(@Valid TipoProducto tipoProducto){
        tipoProductoRepository.save(tipoProducto);
    }

    public List<TipoProducto> findAll() {
        return tipoProductoRepository.findAll();
    }

}
