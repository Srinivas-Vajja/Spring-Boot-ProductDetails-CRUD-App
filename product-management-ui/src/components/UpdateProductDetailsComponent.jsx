import React, { Component } from 'react'
import ProductDetailsService from '../services/ProductDetailsService';

class UpdateProductDetailsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            productName: '',
            productDescription: '',
            productPrice: '',
            productQty:''
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeProductDescHandler = this.changeProductDescHandler.bind(this);
        this.updateProductDetails = this.updateProductDetails.bind(this);
    }

    componentDidMount(){
        ProductDetailsService.getProductDetailsById(this.state.id).then( (res) =>{
            let product = res.data;
            this.setState({productName: product.productName,
                productDescription: product.productDescription,
                productPrice : product.productPrice,
                productQty : product.productQty
            });
        });
    }

    updateProductDetails = (e) => {
        e.preventDefault();
        let product = {productName: this.state.productName, productDescription: this.state.productDescription, productPrice: this.state.productPrice};
        console.log('product => ' + JSON.stringify(product));
        console.log('id => ' + JSON.stringify(this.state.id));
        ProductDetailsService.updateProductDetails(product, this.state.id).then( res => {
            this.props.history.push('/products');
        });
    }

    changeProductNameHandler= (event) => {
        this.setState({productName: event.target.value});
    }

    changeProductDescHandler= (event) => {
        this.setState({productDescription: event.target.value});
    }

    changeProductPriceHandler= (event) => {
        this.setState({productPrice: event.target.value});
    }

    cancel(){
        this.props.history.push('/products');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Product Details</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Product Name" name="productName" className="form-control"
                                                value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Description: </label>
                                            <input placeholder="Product Description" name="productDescription" className="form-control"
                                                value={this.state.productDescription} onChange={this.changeProductDescHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Price: </label>
                                            <input placeholder="Product Price" name="productPrice" className="form-control"
                                                value={this.state.productPrice} onChange={this.changeProductPriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateProductDetails}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateProductDetailsComponent
