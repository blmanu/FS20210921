package com.example.application.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.domains.contracts.services.FilmService;

@RestController
@RequestMapping(path = "/peliculas")
public class FilmResource {
	@Autowired
	FilmService srv;
	
	
}
