package com.product.service.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.product.service.springboot.exception.ResourceNotFoundException;
import com.product.service.springboot.model.ProductDetails;
import com.product.service.springboot.repository.ProductDetailsRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProductDetailsController {

	@Autowired
	private ProductDetailsRepository productDetailsRepository;
	
	// get all products
	@GetMapping("/products")
	public List<ProductDetails> getAllProductDetails(){
		return productDetailsRepository.findAll();
	}		
	
	// create product details rest api
	@PostMapping("/products")
	public ProductDetails createProductDetails(@RequestBody ProductDetails productDetails) {
		return productDetailsRepository.save(productDetails);
	}
	
	// get product details by id rest api
	@GetMapping("/products/{id}")
	public ResponseEntity<ProductDetails> getProductDetailsById(@PathVariable Long id) {
		ProductDetails productDetails = productDetailsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("ProductDetails not exist with id :" + id));
		return ResponseEntity.ok(productDetails);
	}
	
	// update product details rest api
	@PutMapping("/products/{id}")
	public ResponseEntity<ProductDetails> updateProductDetails(@PathVariable Long id, @RequestBody ProductDetails productDtls){
		ProductDetails productDetails = productDetailsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("ProductDetails not exist with id :" + id));
		
		productDetails.setProductName(productDetails.getProductName());
		productDetails.setProductDescription(productDetails.getProductDescription());
		productDetails.setProductPrice(productDetails.getProductPrice());
		productDetails.setProductQty(productDetails.getProductQty());
		
		ProductDetails updatedProductDetails = productDetailsRepository.save(productDetails);
		return ResponseEntity.ok(updatedProductDetails);
	}
	
	// delete product details rest api
	@DeleteMapping("/products/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteProductDetails(@PathVariable Long id){
		ProductDetails productDetails = productDetailsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("ProductDetails not exist with id :" + id));
		
		productDetailsRepository.delete(productDetails);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
