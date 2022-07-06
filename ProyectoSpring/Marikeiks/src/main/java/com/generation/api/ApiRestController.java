package com.generation.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.models.Cliente;
import com.generation.models.Decoracion;
import com.generation.models.DespachoRetiro;
import com.generation.models.EstadoVenta;
import com.generation.models.Producto;
import com.generation.models.Sabor;
import com.generation.models.Venta;
import com.generation.services.ClienteService;
import com.generation.services.DecoracionService;
import com.generation.services.DespachoRetiroService;
import com.generation.services.EstadoVentaService;
import com.generation.services.ProductoService;
import com.generation.services.SaborService;
import com.generation.services.VentaService;

@RestController
@RequestMapping("/api/obtener")
public class ApiRestController {

	//por orden de ENDPOINT me perdía hehe
	@Autowired
	ClienteService clienteService;

	@Autowired
	DespachoRetiroService despachoRetiroService;

	@Autowired
	EstadoVentaService estadoVentaService;

	@Autowired
	ProductoService productoService;

	@Autowired
	SaborService saborService;
	
	@Autowired
	DecoracionService decoracionService;
	
	@Autowired
	VentaService ventaService;
	

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
	//Apis a RV Cata 

	@RequestMapping("/despachosRetiros")
	public List<DespachoRetiro> obtenerDespachoRetiro(){
		return despachoRetiroService.BuscarId();
	}

	@RequestMapping("/decoraciones")
	public List<Decoracion> obtenerDecoracion(){
		return decoracionService.findAll();
	}

	@RequestMapping("/ventas")
	public List<Venta> obtenerVenta(){
		return ventaService.findAll();
	}
	
}
