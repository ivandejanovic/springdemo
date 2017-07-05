/**
 * 
 */
package com.quine.springdemo.service;

import java.util.LinkedHashMap;
import java.util.Collection;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.slf4j.LoggerFactory;

import com.quine.springdemo.entity.Whisky;

/**
 * @author Ivan Dejanovic
 *
 * @version 1.0
 */
public class WhiskyServiceImpl implements WhiskyService {
	private final static org.slf4j.Logger logger = LoggerFactory.getLogger(MainServiceImpl.class);

	// Store our product
	private Map<Integer, Whisky> products = new LinkedHashMap<>();
	
	@PostConstruct
	private void init() {
		Whisky bowmore = new Whisky("Bowmore 15 Years Laimrig", "Scotland, Islay");
		products.put(bowmore.getId(), bowmore);
		Whisky talisker = new Whisky("Talisker 57° North", "Scotland, Island");
		products.put(talisker.getId(), talisker);
	}

	@Override
	public Collection<Whisky> getAll() {
		logger.info("Invoking getAll.");
		
		return products.values();
	}

	@Override
	public Whisky getById(int id) {
		logger.info("Invoking getById.");
		
		return products.get(id);
	}

	@Override
	public Whisky save(Whisky whisky) {
		logger.info("Invoking save.");
		
		return products.putIfAbsent(whisky.getId(), whisky);
	}

	@Override
	public void update(Whisky whisky) {
		logger.info("Invoking update.");
		
		products.put(whisky.getId(), whisky);
	}

	@Override
	public void deleteById(int id) {
		logger.info("Invoking delete.");
		
		products.remove(id);
	}

}
