package com.generation.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.generation.models.Cliente;
import com.generation.models.DespachoRetiro;
import com.generation.models.Producto;
import com.generation.models.Venta;
import com.generation.models.VentaProducto;
import com.generation.services.ClienteService;
import com.generation.services.DespachoRetiroService;
import com.generation.services.ProductoService;
import com.generation.services.VentaProductoService;
import com.generation.services.VentaService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "" + /* aquí debe ir la ip pública de la instancia */"", methods = { RequestMethod.GET,
		RequestMethod.POST })
public class ApiRestController {

	// por orden de ENDPOINT me perdía hehe

	// visualización para el cliente
	@Autowired
	ProductoService productoService;

	// generado por el cliente las siguientes 4
	@Autowired
	ClienteService clienteService;

	@Autowired
	DespachoRetiroService despachoRetiroService;

	@Autowired
	VentaService ventaService;

	@Autowired
	VentaProductoService ventaProductoService;

	// Conseguimos Api Productos, que son los que necesitamos que el cliente
	// visualice, y que trae consigo todas las tablas relacionadas por ID
	@RequestMapping("/obtener/productos")
	public List<Producto> obtenerProductos() {
		List<Producto> listaProductos = productoService.findAll();
		return listaProductos;
	}

	// Cliente nos entrega los siguientes datos importantes
	@PostMapping("/generar/venta")
	public ResponseEntity<Venta> generarVenta(@RequestBody Venta venta) {
		ventaService.saveVenta(venta);

		return new ResponseEntity<Venta>(venta, HttpStatus.OK);
	}

	@PostMapping("/generar/ventaProducto")
	public ResponseEntity<VentaProducto> generarVentaProducto(@RequestBody VentaProducto ventaProducto) {
		ventaProductoService.guardarVentaProducto(ventaProducto);
		return new ResponseEntity<VentaProducto>(ventaProducto, HttpStatus.OK);
	}

	@PostMapping("/generar/cliente")
	public ResponseEntity<Cliente> generarCliente(@RequestBody Cliente cliente) {
		clienteService.saveCliente(cliente);
		return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
	}

	@PostMapping("/generar/despacho")
	public ResponseEntity<DespachoRetiro> generarDespachoRetiro(@RequestBody DespachoRetiro despachoRetiro) {
		despachoRetiroService.registroDespachoRetiro(despachoRetiro);

		return new ResponseEntity<DespachoRetiro>(despachoRetiro, HttpStatus.OK);
	}
}

/*
 * 
 * @RequestMapping("/sabores") public List<Sabor> obtenerSabores() {
 * 
 * return saborService.findAll(); } //Kathy
 * 
 * @RequestMapping("/estadoVenta") public List<EstadoVenta> obtenerEstadoVenta
 * () { List<EstadoVenta> listaEstadosVentas = estadoVentaService.findAll();
 * return listaEstadosVentas; }
 * 
 * @RequestMapping("/clientes") public List<Cliente> obtenerClientes () {
 * List<Cliente> listaClientes = clienteService.findAll(); return listaClientes;
 * } //Apis a RV Cata
 * 
 * @RequestMapping("/despachosRetiros") public List<DespachoRetiro>
 * obtenerDespachoRetiro(){ return despachoRetiroService.BuscarId(); }
 * 
 * @RequestMapping("/decoraciones") public List<Decoracion> obtenerDecoracion(){
 * return decoracionService.findAll(); }
 * 
 * @RequestMapping("/ventas") public List<Venta> obtenerVenta(){ return
 * ventaService.findAll(); }
 */
