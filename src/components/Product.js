import React, {Component} from 'react';

class Product extends Component {

  deleteThisProduct = (event) => {
    this.props.deleteProduct(this.props.index); //grab this object, go up to that function (in homepage)
};
  render() {
    const productName = this.props.productName;
    const description = this.props.description;
    const price = this.props.price;

    return (
        <div>
          <h3>{productName}</h3>
          <div>{description}</div>
          <div>{price}</div>
          <button onClick={this.deleteThisProduct
            // (this.props.productName, this.props.description,this.props.price)
            }>Delete</button> 
        </div>
    );
  }
}

export default Product;