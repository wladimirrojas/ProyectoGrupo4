package com.generation.controllers;

<<<<<<< HEAD
import java.util.List;

import javax.validation.Valid;

import com.generation.models.DespachoRetiro;
import com.generation.services.DespachoRetiroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/despachoRetiro")
public class DespachoRetiroController {
    @Autowired
    DespachoRetiroService despachoRetiroService;

    @RequestMapping("")
    public String despachoRetiro(@ModelAttribute("despachoRetiro") DespachoRetiro despacioRetiro){
        return "despachoRetiro.jsp";
    }

    @PostMapping("/guardar")
    public String saveDespachoReitiro(@Valid @ModelAttribute("despachoRetiro") DespachoRetiro despachoRetiro, BindingResult result, Model model){
        if(result.hasErrors()){
            model.addAttribute("msgErrorDespachoRetiro", "Ingrese los datos del despacho o retiro Correctamente");
            return "despachoRetiro.jsp";
        }else{
            despachoRetiroService.registroDespachoRetiro(despachoRetiro);
            List<DespachoRetiro> listaDespachoRetiro = despachoRetiroService.findAll();
            model.addAttribute("listaDespachoRetiro", listaDespachoRetiro);
            return "mostrarDespachoRetiro.jsp";
        }
    }
    @RequestMapping("/mostrar")
    public String mostrarDespachoRetiro(Model model){
        List<DespachoRetiro> listaDespachoRetiro = despachoRetiroService.findAll();
        model.addAttribute("listaDespachoReitro", listaDespachoRetiro);
        return "mostrarDespachoRetiro.jsp";
    }

    @RequestMapping("/editar/{id}")
    public String editarDespachoRetiro(@PathVariable("id") Long id, Model model){
        DespachoRetiro despachoRetiro =despachoRetiroService.findId(id);
        model.addAttribute("despachoRetiro",despachoRetiro );
        return "editarDespachoRetiro.jsp";
    }

    @PostMapping("/actualizar/{id}")
    public String actualizarDespachoRetiro(@PathVariable("id") Long id,
            @ModelAttribute("despachoRetiro")DespachoRetiro despachoRetiro,
            Model model,
            BindingResult result){
        if(result.hasErrors()){
            model.addAttribute("msgErrorDespachoRetiro", "Ingrese los datos del despacho o retiro Correctamente");
            return "editarDespachoRetiro.jsp";
        }else{
            despachoRetiro.setId(id);
            despachoRetiroService.registroDespachoRetiro(despachoRetiro);
            return "mostrarDespachoRetiro.jsp";
        }
        
    }

    @RequestMapping("/eliminar/{id}")
    public String eliminarDespachoRetiro(@PathVariable("id")Long id){
        despachoRetiroService.eliminarDespachoRetiro(id);
        return "redirect:/despachoRetiro/mostrar";
    }
=======
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.generation.services.DespachoRetiroService;


@Controller
@RequestMapping("/admin/despachoRetiro")
public interface DespachoRetiroController {
>>>>>>> main

}
