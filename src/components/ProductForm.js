import React, {Component} from 'react';

class ProductForm extends Component {

  constructor () {
    super();

    this.state = {
      newProduct: {}
    }
  }

  handleNewProductChange = (event) => {
    const attributeName = event.target.name; //all the input names on the form
    const attributeValue = event.target.value; // all the input valus
    const newProduct = {...this.state.newProduct}; //make a copy of the old object into a new object
    newProduct[attributeName] = attributeValue; //pairing key value properities to make a new object
    this.setState({newProduct})
  };

  addNewProduct = (event) => {
    event.preventDefault(); //stop refresh
    this.props.addNewProductToProductList(this.state.newProduct); //grab this object, go up to that function (in homepage)
  };


  render() {
    return (
        <div>
          <form onSubmit={this.addNewProduct}>
            <div><input name="productName" type="text" placeholder="Name" onChange={this.handleNewProductChange}/></div>
            <div><input name="description" type="text" placeholder="Description" onChange={this.handleNewProductChange}/></div>
            <div><input name="price" type="number" min="0.00" step="0.01" placeholder="Price" onChange={this.handleNewProductChange}/></div>
            <div><input type="submit" value="Create New Product"/></div>
          </form>
        </div>
    );
  }
}

export default ProductForm;