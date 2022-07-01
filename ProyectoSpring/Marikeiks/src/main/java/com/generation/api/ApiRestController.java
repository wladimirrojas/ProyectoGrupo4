package com.generation.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.models.Sabor;
import com.generation.services.SaborService;

@RestController
@RequestMapping("/api")
public class ApiRestController {
    @Autowired

    SaborService saborService;

    @RequestMapping("/obtener/sabores")
    public List<Sabor> obtenerListaSabores() {
        List<Sabor> listaSabores = saborService.findAll();
        return listaSabores;
    }
}
