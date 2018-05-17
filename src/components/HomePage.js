import React, { Component } from 'react';
import AdminView from './AdminView'
import ShopView from './ShopView'


  class HomePage extends Component {

    constructor() {
      super();
      this.state = {
        itemCurrentlyOnSale: 'A Hammer',
         editSaleItem: false,
         productList: [
           {
             productName: 'Hammer',
             description: 'Itsa hammer',
             price: 12.3,
           },
           {
             productName: 'Nail',
             description: 'Itsa nail',
             price: 0.12,
           }
         ],
         cart: []
      };
    }
    deleteProduct = (event, index) => {
        const productList = [...this.state.productList]; 
        productList.splice(index,1); 
        this.setState({productList})
      };
      addCart = (productindex) => {
        const cart = [...this.state.cart]; //take a copy of the arr or object
        cart.push(this.state.productList[productindex]); //push the state of the product list by index to cart arr
        this.setState({cart}); // set the state 
    };

    // ES7 tkae this method and do binding on my class [this.togglEdit.... something}
      toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({editSaleItem});
      };

      handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;
        this.setState({itemCurrentlyOnSale});
      };
      addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList]; //copy the object
        productList.push(newProduct);
        this.setState({productList}); //replace old array with new one 
    };
    

    render() {
      return (
          <div>
            <h1>My Hardware Store</h1>
            <div>
              <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
              <span>
                  <button onClick={this.toggleEditSaleItem}>
                     { this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }
                  </button>
              </span>
              { this.state.editSaleItem ? 
                <div>       
                   <input 
                    onChange={this.handleItemCurrentlyOnSaleChange}
                    value={this.state.itemCurrentlyOnSale} 
                    type="text" 
                    />
                </div> : null }

               {/* { this.state.editSaleItem ? <div><input type="text"/></div> : null }  */}
               {/* this it is true, show this input, otherwise, don't show */}

            </div>
                <AdminView productList={this.state.productList} 
                addNewProductToProductList={this.addNewProductToProductList}
                deleteProduct={this.deleteProduct}/>
                 <ShopView productList={this.state.productList}
                addCart={this.addCart} />
            </div>    
      );
    }
  }
  export default HomePage;