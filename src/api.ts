// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
import Product from '@/interfaces/Product';

const JsonApi = {
  products: [
    {
      category: 'Sporting Goods',
      price: '$49.99',
      stocked: true,
      name: 'Football',
      id: 0,
    },
    {
      category: 'Sporting Goods',
      price: '$9.99',
      stocked: true,
      name: 'Baseball',
      id: 0,
    },
    {
      category: 'Sporting Goods',
      price: '$29.99',
      stocked: false,
      name: 'Basketball',
      id: 0,
    },
    {
      category: 'Electronics',
      price: '$99.99',
      stocked: true,
      name: 'iPod Touch',
      id: 0,
    },
    {
      category: 'Electronics',
      price: '$399.99',
      stocked: false,
      name: 'iPhone 5',
      id: 0,
    },
    {
      category: 'Electronics',
      price: '$199.99',
      stocked: true,
      name: 'Nexus 7',
      id: 0,
    },
  ],
  getAllProducts() {
    this.products.forEach((product: Product, index: number) => {
      product.id = index;
    });
    return this.products;
  },
};

export default JsonApi;
