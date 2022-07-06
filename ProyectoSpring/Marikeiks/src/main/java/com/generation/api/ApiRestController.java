package com.generation.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.models.Cliente;
import com.generation.models.DespachoRetiro;
import com.generation.models.Producto;
import com.generation.models.Sabor;
import com.generation.models.Venta;
import com.generation.services.ClienteService;
import com.generation.services.ProductoService;
import com.generation.services.SaborService;

@RestController
@RequestMapping("/api/obtener")
public class ApiRestController {

	@Autowired
	ProductoService productoService;

	@Autowired
	SaborService saborService;

	@RequestMapping("/productos")
	public List<Producto> obtenerProductos() {
		List<Producto> listaProductos = productoService.findAll();
		return listaProductos;
	}

	@RequestMapping("/sabores")
	public List<Sabor> obtenerSabores() {

		return saborService.findAll();

	}
	//Kathy
	@RequestMapping("/estadoVenta")
	public List<EstadoVenta> obtenerEstadoVenta () {
	List<EstadoVenta> listaEstadosVentas = estadoVentaService.findAll();
	return listaEstadosVentas;
	}

	@RequestMapping("/clientes")
	public List<Cliente> obtenerClientes () {
	List<Cliente> listaClientes = clienteService.findAll();
	return listaClientes;
	}
	//Apis a revisar

	@RequestMapping("/despachosRetiros")
	public List<DespachoRetiro> obtenerDespachoRetiro(){
		return DespachoRetiroService.findAll();
	}


	
}
