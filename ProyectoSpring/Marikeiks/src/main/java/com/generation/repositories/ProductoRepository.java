package com.generation.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.generation.models.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long>{
	
	@Query(value="SELECT p FROM producto p WHERE p.tipo_producto_id = ?1", nativeQuery = true)
	List<Producto> findAllByTipoProducto(String tipoProducto);

}
