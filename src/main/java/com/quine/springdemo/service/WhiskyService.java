/**
 * 
 */
package com.quine.springdemo.service;

import java.util.List;

import com.quine.springdemo.entity.Whisky;

/**
 * @author Ivan Dejanovic
 *
 * @version 1.0
 */
public interface WhiskyService {
	List<Whisky> getAll();

	Whisky getById(int id);
	
	Whisky save(Whisky whisky);
	
	Whisky update (Whisky update);
	
	void deleteById(int id);
}
