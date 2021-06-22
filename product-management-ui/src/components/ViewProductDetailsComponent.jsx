import React, { Component } from 'react'
import ProductDetailsService from '../services/ProductDetailsService'

class ViewProductDetailsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            product: {}
        }
    }

    componentDidMount(){
        ProductDetailsService.getProductDetailsById(this.state.id).then( res => {
            this.setState({product: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Product Name: </label>
                            <div> { this.state.product.productName }</div>
                        </div>
                        <div className = "row">
                            <label> Product Description: </label>
                            <div> { this.state.product.productDescription }</div>
                        </div>
                        <div className = "row">
                            <label> Product Price: </label>
                            <div> { this.state.product.productPrice }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProductDetailsComponent
