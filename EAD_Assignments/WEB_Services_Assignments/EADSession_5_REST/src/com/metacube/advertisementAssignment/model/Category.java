package com.metacube.advertisementAssignment.model;

/**
 * class representing category
 * created on September 03, 2018
 */
public class Category {
	private int id;
	private String categoryName;
	
	public Category (int id, String categoryName) {
		this.id = id;
		this.categoryName = categoryName;
	}

	public int getId() {
		return id;
	}

	public String getCategoryName() {
		return categoryName;
	}
	
}
