import React, {Component} from 'react';

  import Product from './Product';
import ShopItems from './Shopitems';

  class ShopView extends Component {


    render() {
      const productList = this.props.productList;

      console.log(productList);

      const shopViewComponents = productList.map((product, index) => {
        return <ShopItems
            productName={product.productName}
            description={product.description}
            price={product.price}
            key={index}
            index={index}
            addCart={this.props.addCart}
          
            />;
      });

      return (
          <div>
              <h1>SHOP VIEW (edit disabled)</h1>
            { shopViewComponents }
          </div>
      );

    }
  }

  export default ShopView;