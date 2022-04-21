package com.food.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.food.model.User;
import com.food.service.Foodservice;


@RestController
public class Foodcontroller {

	
	@Autowired
	private Foodservice loginservice;
	
@PostMapping("/add")
@CrossOrigin(origins="http://localhost:4200")
public User insertuser(@RequestBody User name) {
	return loginservice.insertService(name);
	}
@PostMapping("/update")
@CrossOrigin(origins="http://localhost:4200")
public User updateuser(@RequestBody User name) {
	return loginservice.UpdateService(name);
}
@PostMapping("/delete")
@CrossOrigin(origins="http://localhost:4200")
public void deleteuser(@RequestBody User name) {
	loginservice.deleteService(name);
}
@GetMapping("/fetch")
@CrossOrigin(origins="http://localhost:4200")
public List<User> fetchUser() {
	return loginservice.fetchService();
}
}

		
	

