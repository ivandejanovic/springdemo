package com.quine.springdemo.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.quine.springdemo.service.MainService;

/**
 * @author Ivan Dejanovic
 *
 * @version 1.0
 */
@Controller
public class MainController {
    private final static org.slf4j.Logger logger = LoggerFactory.getLogger(MainController.class);
    
    @Autowired
    private MainService mainService;

    @RequestMapping("/index.htm")
    public ModelAndView index(HttpServletRequest request, HttpServletResponse response) throws Exception {
        logger.info("Getting index.htm");
        
        Map<String, String> model = new HashMap<String, String>();
        model.put("message", mainService.retrieveMessage());

        return new ModelAndView("jsp/index.jsp", model);
    }

    @RequestMapping("/login.htm")
    public ModelAndView login(HttpServletRequest request, HttpServletResponse response) throws Exception {
        logger.info("Getting login.htm");
        
        return new ModelAndView("jsp/login.jsp");
    }

    @RequestMapping("/loggedout.htm")
    public ModelAndView loggedout(HttpServletRequest request, HttpServletResponse response) throws Exception {
        logger.info("Getting loggedout.htm");
        
        return new ModelAndView("jsp/loggedout.jsp");
    }

    @RequestMapping("/error400.htm")
    public ModelAndView error400(HttpServletRequest request, HttpServletResponse response) throws Exception {

        return new ModelAndView("jsp/error400.jsp");
    }

    @RequestMapping("/error401.htm")
    public ModelAndView error401(HttpServletRequest request, HttpServletResponse response) throws Exception {

        return new ModelAndView("jsp/error401.jsp");
    }

    @RequestMapping("/error404.htm")
    public ModelAndView error404(HttpServletRequest request, HttpServletResponse response) throws Exception {

        return new ModelAndView("jsp/error404.jsp");
    }

    @RequestMapping("/error500.htm")
    public ModelAndView error500(HttpServletRequest request, HttpServletResponse response) throws Exception {

        return new ModelAndView("jsp/error500.jsp");
    }
}
