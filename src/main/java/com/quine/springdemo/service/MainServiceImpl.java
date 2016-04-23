/**
 * 
 */
package com.quine.springdemo.service;

import org.slf4j.LoggerFactory;

/**
 * @author Ivan Dejanovic
 *
 * @version 1.0
 */
public class MainServiceImpl implements MainService {
    private final static org.slf4j.Logger logger = LoggerFactory.getLogger(MainServiceImpl.class);

    @Override
    public String retrieveMessage() {
        logger.info("Invoking retrieve message.");
        
        return "Service message";
    }

}
