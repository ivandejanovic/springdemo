/**
 * 
 */
package com.quine.springdemo.service;

/**
 * @author Ivan Dejanovic
 *
 * @version 1.0
 */
public class MainServiceImpl implements MainService {

    @Override
    public String retrieveMessage() {
        return "Service message";
    }

}
