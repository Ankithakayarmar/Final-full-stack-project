package com.food.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.food.model.User;

@Repository
public interface Foodinterface extends JpaRepository<User,Integer>{

}
