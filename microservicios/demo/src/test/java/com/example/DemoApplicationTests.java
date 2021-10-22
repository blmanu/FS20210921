package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import com.example.infrastucture.repositories.ActorRepository;
import com.example.ioc.Formato;
import com.example.ioc.Servicio;

@SpringBootTest
@ActiveProfiles("Test")
class DemoApplicationTests {
	@Autowired
//	@Qualifier("otro")
	Servicio srv;
	
	@Autowired
	Formato formato;
	
	
	@Test
	void inyeccionesTaza() {
		assertEquals("SOY UNA TAZA", srv.saluda());
		assertEquals("HOLA", formato.formatea("hola"));
		assertEquals(1, formato.getCont());
	}
	@Test
	void inyeccionesTetera() {
		assertEquals("Soy una tetera".toUpperCase(), srv.saluda());
		assertEquals("HOLA", formato.formatea("hola"));
		assertEquals(1, formato.getCont());
	}

}
