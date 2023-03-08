package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.model;
import com.example.demo.service.service;
@RestController
@CrossOrigin
public class controller {
	@Autowired
	service service;
	
	@PostMapping("/car")
	public String add(@RequestBody model car)
	{
		return service.addCar(car);
	}
	
	@GetMapping("/car")
	public List<model> get()
	{
		return service.getCar();
	}
	@GetMapping("/car/{field}")
	public List<model> babyWithSort(@PathVariable String field)
	{
		return service.getCarSorted(field);
	}
	@GetMapping("/id/{id}")
	public List<model> getByCarName(@PathVariable int id){
		return service.getCarById(id);
	}
	@PutMapping("/car")
	public String update(@RequestBody model car)
	{
		return service.updateCar(car);
	}
	
	@DeleteMapping("/car")
		public String delete(@RequestParam int id)
		{
		return service.deleteCarById(id);
		}
	@GetMapping("/car/{offset}/{pageSize}")
	public List<model> CarWithPagination(@PathVariable int offset,@PathVariable int pageSize)
	{
		return service.getCarWithPagination(offset, pageSize );
	}
	@GetMapping("/car/{offset}/{pageSize}/{field}")
	public List<model> CarWithSortingAndPagination(@PathVariable int offset,@PathVariable int pageSize,@PathVariable String field)
	{
		return service.getCarWithSortingAndPagination(offset, pageSize,field );
	}
	
	

}