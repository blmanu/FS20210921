package com.examples;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

class GildedRoseTest {
	GildedRose gildedRose;
	Item[] arrItems;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {

	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@ParameterizedTest(name = "{0}")
	@CsvSource({"'algo', 0, 0", "'Aged Brie', 10, 25",
		"'Backstage passes to a TAFKAL80ETC concert', 10, 10",
		"'Sulfuras, Hand of Ragnaros', 10, 80" })
	void test(String name, int sellIn, int quality) {
		arrItems = new Item[] { new Item(name, sellIn, quality) };
		Item[] arr = arrItems;
		gildedRose = new GildedRose(arrItems);	
		gildedRose.updateQuality();
		gildedRose.updateQuality();
		gildedRose.updateQuality();
		assertAll("gildedRose",
			 ()-> assertEquals(arr[0].name, gildedRose.items[0].name),
			 ()-> assertEquals(arr[0].sellIn, gildedRose.items[0].sellIn),
			 ()-> assertEquals(arr[0].quality, gildedRose.items[0].quality)
		);
	}
	

}
