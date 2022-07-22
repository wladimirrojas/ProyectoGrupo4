package com.generation.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.models.Venta;
import com.generation.services.VentaService;

@RestController
@RequestMapping("/api/venta")
// @CrossOrigin(origins = "*", methods= {RequesMethod.GET,RequesMethod.POST})

public class VentaApiRestController{

    @Autowired
	VentaService ventaService;

    @RequestMapping("/obtener")
    public List<Venta> obtenerListaVenta(){
        List<Venta> listadoVenta = ventaService.findAll();
        return listadoVenta;
    }

    @PostMapping(value = "/guardar")
    public ResponseEntity<Venta> registrarVenta(@RequestBody Venta venta){
        ventaService.saveVenta(venta);
        return new ResponseEntity<Venta>(venta, HttpStatus.OK);
    }

}