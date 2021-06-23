import React, { Component } from 'react'
import ProductDetailsService from '../services/ProductDetailsService'

class ListProductDetailsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
        this.addProductDetails = this.addProductDetails.bind(this);
        this.editProductDetails = this.editProductDetails.bind(this);
        this.deleteProductDetails = this.deleteProductDetails.bind(this);
    }

    deleteProductDetails(id){
        ProductDetailsService.deleteProductDetails(id).then( res => {
            this.setState({products: this.state.products.filter(product => product.id !== id)});
        });
    }
    viewProductDetails(id){
        this.props.history.push(`/view-product/${id}`);
    }
    editProductDetails(id){
        this.props.history.push(`/add-product/${id}`);
    }

    componentDidMount(){
        ProductDetailsService.getProductDetails().then((res) => {
            this.setState({ products: res.data});
        });
    }

    addProductDetails(){
        this.props.history.push('/add-product/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Products List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProductDetails}> Add Product</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Product Name</th>
                                    <th> Product Description</th>
                                    <th> Product Price</th>
                                    <th> Product Quantity</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        product =>
                                        <tr key = {product.id}>
                                             <td> {product.productName} </td>
                                             <td> {product.productDescription}</td>
                                             <td> {product.productPrice}</td>
                                            <td> {product.productQty}</td>
                                             <td>
                                                 <button onClick={ () => this.editProductDetails(product.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProductDetails(product.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProductDetails(product.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListProductDetailsComponent
