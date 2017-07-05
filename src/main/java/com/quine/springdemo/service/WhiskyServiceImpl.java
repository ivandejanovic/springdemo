/**
 * 
 */
package com.quine.springdemo.service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
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
	public List<Whisky> getAll() {
		logger.info("Invoking getAll.");
		
		return new ArrayList<Whisky>(products.values());
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.quine.springdemo.service.WhiskyService#getById(int)
	 */
	@Override
	public Whisky getById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.quine.springdemo.service.WhiskyService#save(com.quine.springdemo.
	 * entity.Whisky)
	 */
	@Override
	public Whisky save(Whisky whisky) {
		// TODO Auto-generated method stub
		return null;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.quine.springdemo.service.WhiskyService#update(com.quine.springdemo.
	 * entity.Whisky)
	 */
	@Override
	public Whisky update(Whisky update) {
		// TODO Auto-generated method stub
		return null;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.quine.springdemo.service.WhiskyService#deleteById(int)
	 */
	@Override
	public void deleteById(int id) {
		// TODO Auto-generated method stub

	}

}
