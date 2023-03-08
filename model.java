package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class model{
	@Id
	private int id;
	private  String carName;
	private String brand;
	private String Rentalprice;
	private int seater;
	private String fueltype;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCarName() {
		return carName;
	}
	public void setCarName(String carName) {
		this.carName = carName;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getRentalprice() {
		return Rentalprice;
	}
	public void setRentalprice(String rentalprice) {
		Rentalprice = rentalprice;
	}
	public int getSeater() {
		return seater;
	}
	public void setSeater(int seater) {
		this.seater = seater;
	}
	public String getFueltype() {
		return fueltype;
	}
	public void setFueltype(String fueltype) {
		this.fueltype = fueltype;
	}
	@Override
	public String toString() {
		return "Car [id=" + id + ", carName=" + carName + ", brand=" + brand + ", Rentalprice=" + Rentalprice
				+ ", seater=" + seater + ", fueltype=" + fueltype + "]";
	}
	

}