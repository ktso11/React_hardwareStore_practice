import React, {Component} from 'react';

class ShopItems extends Component {

    AddtoCart = () => {
        this.props.addCart(this.props.index); 
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
          <button onClick={this.AddtoCart
            // (this.props.productName, this.props.description,this.props.price)
            }>Add to Cart</button> 

        </div>
    );
  }
}

export default ShopItems;