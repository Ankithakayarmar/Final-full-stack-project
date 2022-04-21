package com.food.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.model.User;
import com.food.repository.Foodinterface;



@Service
public class Foodservice {
	
	@Autowired
	private Foodinterface inter;
	
	public User insertService(User name)
	{
		return inter.save(name);
	}
	
	public User UpdateService(User name1)
	{
		return inter.save(name1);
	}
	public void deleteService(User id)
	{
		inter.delete(id);
	}
	public List<User>  fetchService()
	{
		return inter.findAll();
	}

}
