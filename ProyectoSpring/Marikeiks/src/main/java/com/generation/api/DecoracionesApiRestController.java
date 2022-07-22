package com.generation.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.models.Decoracion;
import com.generation.services.DecoracionService;

@RestController
@RequestMapping("/api/decoraciones")
// @CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})


public class DecoracionesApiRestController{
    
    @Autowired
    DecoracionService decoracionService;

    @RequestMapping("/obtener")
    public List<Decoracion> obtenerListaDecoracion(){
        List<Decoracion> listadoDecoracion = decoracionService.findAll();
        return listadoDecoracion;
    }

    @PostMapping(value = "/guardar")
    public ResponseEntity<Decoracion> registrarDecoracion(@RequestBody Decoracion decoracion){
        decoracionService.saveDecoracion(decoracion);
        return new ResponseEntity<Decoracion>(decoracion, HttpStatus.OK);
    }
    @PostMapping(value = "/eliminar/{id}")
    public ResponseEntity<Decoracion> eliminarDecoracion(@PathVariable Long id){
        try{
            decoracionService.eliminarDecoracion(id);
            return new ResponseEntity<Decoracion>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<Decoracion>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}