/**
 * 
 */
package com.quine.springdemo.controller;

import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import com.quine.springdemo.entity.Whisky;
import com.quine.springdemo.service.WhiskyService;

/**
 * @author Ivan Dejanovic
 *
 * @version 1.0
 */
@Controller
@RequestMapping(value = "/api/whisky/")
public class WhiskyRestController {
	private final static org.slf4j.Logger logger = LoggerFactory.getLogger(WhiskyRestController.class);

	@Autowired
	WhiskyService service;

	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Whisky> findAll() {
		logger.info("Rest whisky get all");
		
		return service.getAll();
	}

	@RequestMapping(value = "{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Whisky findOne(@PathVariable("id") int id) {
		logger.info("Rest whisky get");
		
		return service.getById(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	@ResponseBody
	public Whisky create(@RequestBody Whisky resource) {
		logger.info("Rest whisky post");
		
		return service.save(resource);
	}

	@RequestMapping(value = "{id}", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public Whisky update(@PathVariable("id") int id, @RequestBody Whisky resource) {
		logger.info("Rest whisky put");
		
		return service.update(resource);
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public void delete(@PathVariable("id") int id) {
		logger.info("Rest whisky delete");
		
		service.deleteById(id);
	}

}
