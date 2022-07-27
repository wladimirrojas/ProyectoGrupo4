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

import com.generation.models.Cantidad;
import com.generation.models.Cliente;
import com.generation.models.Decoracion;
import com.generation.models.DespachoRetiro;
import com.generation.models.Producto;
import com.generation.models.Sabor;
import com.generation.models.TipoProducto;
import com.generation.models.Venta;
import com.generation.models.VentaProducto;
import com.generation.services.CantidadService;
import com.generation.services.ClienteService;
import com.generation.services.DecoracionService;
import com.generation.services.DespachoRetiroService;
import com.generation.services.ProductoService;
import com.generation.services.SaborService;
import com.generation.services.TipoProductoService;
import com.generation.services.VentaProductoService;
import com.generation.services.VentaService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = { "http://localhost:9080", "http://localhost:3000", "http://localhost:5000",
		"http://localhost:8080" }, methods = { RequestMethod.GET, RequestMethod.POST })
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

	@Autowired
	TipoProductoService tipoProductoService;

	@Autowired
	DecoracionService decoracionService;

	@Autowired
	SaborService saborService;

	@Autowired
	CantidadService cantidadService;

	// Conseguimos Api Productos, que son los que necesitamos que el cliente
	// visualice, y que trae consigo todas las tablas relacionadas por ID
	@RequestMapping("/obtener/productos")
	public List<Producto> obtenerProductos() {
		List<Producto> listaProductos = productoService.findAll();
		return listaProductos;
	}

	// solo productos veganos
	@RequestMapping("/obtener/veganos")
	public List<Producto> obtenerVegano() {
		return productoService.buscarVegano(1);
	}

	@RequestMapping("/obtener/tipoproductos")
	public List<TipoProducto> tipoProducto() {
		return tipoProductoService.findAll();
	}

	@RequestMapping("/obtener/decoraciones")
	public List<Decoracion> obtenerDecoracion() {
		return decoracionService.findAll();
	}

	@RequestMapping("/obtener/sabores")
	public List<Sabor> obtenerSabor() {
		return saborService.findAll();
	}

	@RequestMapping("/obtener/cantidades")
	public List<Cantidad> obtenerCantidad() {
		return cantidadService.findAll();
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
