package com.example.application.resource;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.domains.contracts.services.CategoryService;
import com.example.domains.entities.Category;
import com.example.domains.entities.dtos.ActorDTO;
import com.example.domains.entities.dtos.FilmShort;
import com.example.exceptions.BadRequestException;
import com.example.exceptions.DuplicateKeyException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;

@RestController
@RequestMapping(path = "/categorias")
public class CategoryResource {

	@Autowired
	CategoryService srv;

	@GetMapping
	public List<Category> getAll() {
		return (List<Category>) srv.getAll();
	}

	@GetMapping(path = "/{id}")
	public Category getOne(@PathVariable int id) throws NotFoundException {
		var categoria = srv.getOne(id);
		if (categoria.isEmpty())
			throw new NotFoundException();
		else
			return new Category(categoria.get().getCategoryId(), categoria.get().getName());
	}

	@GetMapping(path = "/{id}/peliculas")
	@Transactional
	public List<FilmShort> getPelis(@PathVariable int id) throws NotFoundException {
		var categoria = srv.getOne(id);
		if (categoria.isEmpty())
			throw new NotFoundException();
		else {
			return (List<FilmShort>) categoria.get().getFilmCategories().stream().map(item -> FilmShort.from(item))
					.collect(Collectors.toList());
		}
	}

	@PostMapping
	public ResponseEntity<Object> create(@Valid @RequestBody Category item)
			throws BadRequestException, DuplicateKeyException, InvalidDataException {
		if (item == null)
			throw new BadRequestException("Faltan los datos");
		var newItem = srv.add(item);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(newItem.getCategoryId()).toUri();
		return ResponseEntity.created(location).build();
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable int id) {
		srv.deleteById(id);
	}
}
