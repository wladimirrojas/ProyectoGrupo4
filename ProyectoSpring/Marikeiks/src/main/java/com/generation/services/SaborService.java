package com.generation.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.models.Sabor;
import com.generation.repositories.SaborRepository;

@Service
public class SaborService {
    
    @Autowired
    SaborRepository saborRepository;

    public void saveSabor(@Valid Sabor sabor){
        saborRepository.save(sabor);
    }

    public List<Sabor> findAll() {
        return saborRepository.findAll();
    }
}
