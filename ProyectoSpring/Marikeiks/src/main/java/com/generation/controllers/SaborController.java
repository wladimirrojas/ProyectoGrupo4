package com.generation.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.generation.models.Sabor;
import com.generation.services.SaborService;

@Controller
@RequestMapping("/sabor")
public class SaborController {
    
    @Autowired
    SaborService saborService;

    @RequestMapping("")
    public String ingreso(Model model){
        Sabor sabor = new Sabor();
        model.addAttribute("sabor", sabor);

        List<Sabor> listaSabores = saborService.findAll();
        model.addAttribute("listaSabores", listaSabores);


        return "sabor.jsp";
    }
    @RequestMapping("/guardar")
    public String guardarSabor(@Valid @ModelAttribute("sabor") Sabor sabor){

        saborService.saveSabor(sabor);
        return "redirect:/sabor";
    }

}
