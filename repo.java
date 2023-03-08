package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import com.example.demo.model.Car;
import com.example.demo.model.model;

@Repository
public interface Repo extends JpaRepository<model,Integer>{
	public List<model> getCarById(int id);
}