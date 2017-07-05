/**
 * 
 */
package com.quine.springdemo.service;

import java.util.Collection;

import com.quine.springdemo.entity.Whisky;

/**
 * @author Ivan Dejanovic
 *
 * @version 1.0
 */
public interface WhiskyService {
	Collection<Whisky> getAll();

	Whisky getById(int id);
	
	Whisky save(Whisky whisky);
	
	void update (Whisky update);
	
	void deleteById(int id);
}
