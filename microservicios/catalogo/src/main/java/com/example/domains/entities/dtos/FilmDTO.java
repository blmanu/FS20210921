package com.example.domains.entities.dtos;

import java.math.BigDecimal;
import java.sql.Timestamp;

import com.example.domains.entities.Actor;
import com.example.domains.entities.Film;
import com.example.domains.entities.Language;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class FilmDTO {
	@JsonProperty("id")
	private int filmId;
	@JsonProperty("titulo")
	private String tittle;
	@JsonProperty("id_idioma")
	private int language;
	@JsonProperty("rental_duration")
	private byte rentalDuration;
	@JsonProperty("rental_rate")
	private BigDecimal rentalRate;
	@JsonProperty("replacement_cost")
	private BigDecimal replacementCost;
	@JsonProperty("last_update")
	private Timestamp lastUpdate;
	
	public static Film from(FilmDTO source) {
		Film film = new Film(source.getFilmId());
		film.setTitle(source.getTittle());
		film.setLanguage(new Language(source.getLanguage()));
		film.setRentalDuration(source.getRentalDuration());
		film.setRentalRate(source.getRentalRate());
		film.setReplacementCost(source.getReplacementCost());
		film.setLastUpdate(source.getLastUpdate());
		return film;
	}
	public static FilmDTO from(Film source) {
		return new FilmDTO(
				source.getFilmId(),
				source.getTitle(),
				source.getLanguage().getLanguageId(),
				source.getRentalDuration(),
				source.getRentalRate(),
				source.getReplacementCost(),
				source.getLastUpdate()
				);
	}
	

}
