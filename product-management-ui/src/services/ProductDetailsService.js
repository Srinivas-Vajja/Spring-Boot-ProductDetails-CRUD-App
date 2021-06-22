import axios from 'axios';

const PRODUCT_DETAILS_API_BASE_URL = "http://localhost:8080/api/v1/products";

class ProductDetailsService {

    getProductDetails(){
        return axios.get(PRODUCT_DETAILS_API_BASE_URL);
    }

    createProductDetails(employee){
        return axios.post(PRODUCT_DETAILS_API_BASE_URL, employee);
    }

    getProductDetailsById(employeeId){
        return axios.get(PRODUCT_DETAILS_API_BASE_URL + '/' + employeeId);
    }

    updateProductDetails(employee, employeeId){
        return axios.put(PRODUCT_DETAILS_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteProductDetails(employeeId){
        return axios.delete(PRODUCT_DETAILS_API_BASE_URL + '/' + employeeId);
    }
}

export default new ProductDetailsService()