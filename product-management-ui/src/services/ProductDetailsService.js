import axios from 'axios';

const PRODUCT_DETAILS_API_BASE_URL = "http://localhost:8080/api/v1/products";

class ProductDetailsService {

    getProductDetails(){
        return axios.get(PRODUCT_DETAILS_API_BASE_URL);
    }

    createProductDetails(product){
        return axios.post(PRODUCT_DETAILS_API_BASE_URL, product);
    }

    getProductDetailsById(productId){
        return axios.get(PRODUCT_DETAILS_API_BASE_URL + '/' + productId);
    }

    updateProductDetails(product, productId){
        return axios.put(PRODUCT_DETAILS_API_BASE_URL + '/' + productId, product);
    }

    deleteProductDetails(productId){
        return axios.delete(PRODUCT_DETAILS_API_BASE_URL + '/' + productId);
    }
}

export default new ProductDetailsService()