package com.generation.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.models.DespachoRetiro;
import com.generation.repositories.DespachoRetiroRepository;


@Service
public class DespachoRetiroService {
    
    @Autowired
    DespachoRetiroRepository despachoRetiroRepository;

    public void registroDespachoRetiro(@Valid DespachoRetiro despacho_retiro) {
    despachoRetiroRepository.save(despacho_retiro);
    }

    public List<DespachoRetiro> BuscarId() {
        return despachoRetiroRepository.findAll();
    }

    public DespachoRetiro findId(Long id) {
        return despachoRetiroRepository.findById(id).get();
    }

    public void eliminarDespachoRetiro(Long id) {
        despachoRetiroRepository.deleteById(id);
    }




    


}