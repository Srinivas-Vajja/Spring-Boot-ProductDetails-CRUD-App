package com.product.service.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.product.service.springboot.model.ProductDetails;


@Repository
public interface ProductDetailsRepository extends JpaRepository<ProductDetails, Long>{

}
