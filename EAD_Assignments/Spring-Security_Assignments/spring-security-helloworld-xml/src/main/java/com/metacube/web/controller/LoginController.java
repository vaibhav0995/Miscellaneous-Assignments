package com.metacube.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {

	@RequestMapping(value = { "/","/login"}, method = RequestMethod.GET)
	public ModelAndView welcomePage(@RequestParam(value="error" ,required=false) String error,
			@RequestParam(value="logout", required=false) String logout) {
		ModelAndView model = new ModelAndView();
		if(error!=null) {
			model.addObject("error", "Invalid username or password !");
		}
		if(logout!=null) {
			model.addObject("message", "Successfully logged out !");
		}
		model.setViewName("login");
		return model;

	}

	@RequestMapping(value = "/admin**", method = RequestMethod.GET)
	public ModelAndView adminPage() {

		ModelAndView model = new ModelAndView();
		model.addObject("title", "Welcome Admin");
		model.addObject("message", "This is protected page!");
		model.setViewName("admin");

		return model;

	}

}