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

import com.generation.models.DespachoRetiro;
import com.generation.services.DespachoRetiroService;



@RestController
@RequestMapping("/despachoRetiros")
// @CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class DespachoRetiroApiRestController{
    
    @Autowired
    DespachoRetiroService despachoRetiroService;

    @RequestMapping("/obtener")
    public List<DespachoRetiro> obtenerListaDespachoRetiro(){
        List<DespachoRetiro> listadoDespachoRetiro = despachoRetiroService.findAll();
        return listadoDespachoRetiro;
    }

    @PostMapping(value = "/guardar")
    public ResponseEntity<DespachoRetiro> registrarDespachoRetiro(@RequestBody DespachoRetiro despachoRetiro){
        despachoRetiroService.registroDespachoRetiro(despachoRetiro);
        return new ResponseEntity<DespachoRetiro>(despachoRetiro, HttpStatus.OK);
    }


    @PostMapping(value = "/eliminar/{id}")
    public ResponseEntity<DespachoRetiro> eliminarDespachoRetiro(@PathVariable Long id){
        try{
            despachoRetiroService.eliminarDespachoRetiro(id);
            return new ResponseEntity<DespachoRetiro>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<DespachoRetiro>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}