package com.product.service.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "product_details")
public class ProductDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "product_name")
	private String productName;

	@Column(name = "product_description")
	private String productDescription;
	
	@Column(name = "product_price")
	private String productPrice;
	
	@Column(name = "product_qty")
	private int productQty;
	
	public ProductDetails() {
		
	}
	
	public ProductDetails(String productName, String productDescription, String productPrice ,int productQty) {
		super();
		this.productName = productName;
		this.productDescription = productDescription;
		this.productPrice = productPrice;
		this.productQty = productQty;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public String getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(String productPrice) {
		this.productPrice = productPrice;
	}

	public int getProductQty() {
		return productQty;
	}

	public void setProductQty(int productQty) {
		this.productQty = productQty;
	}

	
}
