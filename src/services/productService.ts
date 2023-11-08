import TProduct from './models/product';

/**
 * Discount off applies
 */
const products: TProduct[] = [
  {
    name: 'Garlic',
    qualityInStock: 1200,
    description: 'Local garlic',
    currentPrice: 3.99,
    originalPrice: 4.99,
    discountOff: 0,
    priceUnit: 'Each',
    id: '1',
    soldQty: 1043,
    special: true,
  },
  {
    name: 'Beef',
    description: 'New Zeland grass feed premium beef. This is the special beef you will never forget',
    qualityInStock: 120,
    currentPrice: 14.99,
    originalPrice: 14.99,
    discountOff: 0,
    priceUnit: 'KG',
    id: '2',
    soldQty: 1033,
    special: false,
  },
  {
    name: 'Pork Ribs',
    description: 'New Zeland farm pork',
    qualityInStock: 100,
    currentPrice: 10.99,
    originalPrice: 13.99,
    discountOff: 0,
    priceUnit: 'KG',
    id: '3',
    soldQty: 10233,
    special: true,
  },
  {
    name: 'Chicken Drums',
    description: 'New Zeland farm chicken',
    qualityInStock: 100,
    currentPrice: 9.99,
    originalPrice: 10.99,
    discountOff: 0,
    priceUnit: 'KG',
    id: '4',
    soldQty: 10213,
    special: true,
  },
  {
    name: 'Chicken Drums',
    description: 'New Zeland farm chicken',
    qualityInStock: 100,
    currentPrice: 9.99,
    originalPrice: 10.99,
    discountOff: 0,
    priceUnit: 'KG',
    id: '5',
    soldQty: 10213,
    special: true,
  },
  {
    name: 'Chicken Drums',
    description: 'New Zeland farm chicken',
    qualityInStock: 100,
    currentPrice: 10.99,
    originalPrice: 10.99,
    priceUnit: 'KG',
    id: '6',
    soldQty: 10213,
    special: true,
  },
];

export const getProducts = (): Promise<TProduct[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};
