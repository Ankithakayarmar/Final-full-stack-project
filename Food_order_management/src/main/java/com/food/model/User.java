package com.food.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private int id;
	

	
	private String Password;
	private  String name;
	private String EmailId;
	private long Phone;
	private String Address;
	private String Foodname;
	private double Price;
	
	public User() {
		}
	
	
	
	
	public User(int id, String password,String name,String emailid,long phone,String address,String foodname,double price) 
	{
		super();
		this.id = id;
		
		this.Password = password;
		this.name=name;
		this.EmailId=emailid;
		this.Phone=phone;
		this.Address=address;	
		this.Foodname=foodname;
		this.Price=price;
		
		
		}
	




	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	
	
	
	
	
	

	

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}




	public String getName() {
		return name;
	}




	public void setName(String name) {
		this.name = name;
	}




	public String getEmailId() {
		return EmailId;
	}




	public void setEmailId(String emailId) {
		EmailId = emailId;
	}




	public long getPhone() {
		return Phone;
	}




	public void setPhone(long phone) {
		Phone = phone;
	}




	public String getAddress() {
		return Address;
	}




	public void setAddress(String address) {
		Address = address;
	}








	public String getFoodname() {
		return Foodname;
	}




	public void setFoodname(String foodname) {
		Foodname = foodname;
	}




	public double getPrice() {
		return Price;
	}




	public void setPrice(double price) {
		Price = price;
	}




	
	
	
	
	
	
}
