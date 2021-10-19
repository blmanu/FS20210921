package com.examples;


import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.EmptySource;
import org.junit.jupiter.params.provider.NullSource;

class ValidadoresTest {
	Validadores val;
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		val = new Validadores();
	}

	@AfterEach
	void tearDown() throws Exception {
	}
	
	@ParameterizedTest
	@DisplayName("DNIs no validos")
	@EmptySource
	@CsvSource({ "4444", "hh", "12345678A", "s" })
	void testNifErroneo(String dni) {
		assertFalse(val.isNIF(dni));
	}
	
	@ParameterizedTest
	@DisplayName("DNIs validos")
	@NullSource
	@CsvSource({ "44667260H", "15500380J", "28714764T"})
	void testNifBueno(String dni) {
		assertTrue(val.isNIF(dni));
	}	

}
