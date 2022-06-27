package com.generation.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.generation.models.Tipo_producto;
import com.generation.services.Tipo_productoService;

@Controller
@RequestMapping("/tipo_producto")
public class Tipo_productoController {
    
    @Autowired
    Tipo_productoService tipo_productoService;
    
    @RequestMapping("")
    public String ingreso(Model model){
        Tipo_producto tipo_producto = new Tipo_producto();
        model.addAttribute("tipo_producto", tipo_producto);

        List<Tipo_producto> listaTipo_productos = tipo_productoService.findAll();
        model.addAttribute("listaTipo_productos", listaTipo_productos);

        return "tipo_producto.jsp";
    }
    @RequestMapping("/guardar")
    public String guardarTipo_producto(@Valid @ModelAttribute("tipo_producto") Tipo_producto tipo_producto){

        tipo_productoService.saveTipo_producto(tipo_producto);
        return "redirect:/tipo_producto";
    }


}
