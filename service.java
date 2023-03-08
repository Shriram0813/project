package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.model.model;
import com.example.demo.repo.Repo;
@Service
public class service {
	@Autowired
	Repo repository;
	public String addCar(model car) 
	{
		repository.save(car);
		return "Car is Added";
	}
	public List<model> getCar()
	{
		return repository.findAll();
	}
	public List<model> getCarById(int id){
		return repository.getCarById(id);
	}
	public String updateCar(model car)
	{
		repository.save(car);
		return " Car is Updated ";
	}
	public String deleteCarById(int id) {
	    repository.deleteById(id);
	    return "Car Removed";
	}
	public List<model> getCarSorted(String field)
	{
		return repository.findAll(Sort.by(Sort.Direction.ASC, field));
	}
	public List<model> getCarWithPagination(@PathVariable int offset, @PathVariable int pageSize)
	{
		Page<model> page=repository.findAll(PageRequest.of(offset,pageSize));
		return page.getContent();
	}
	public List<model> getCarWithSortingAndPagination(int offset,int pageSize,String field)
	{
		Pageable paging = PageRequest.of(offset,pageSize,Sort.by(field));
		Page<model> page=repository.findAll(paging);
		return page.getContent();
	}

}