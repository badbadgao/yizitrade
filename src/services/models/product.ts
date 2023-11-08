type TProduct = {
  name: string;
  description: string;
  qualityInStock: number;
  currentPrice?: number;
  originalPrice: number;
  discountOff?: number;
  priceUnit: string;
  id: string;
  soldQty: number;
  special: boolean;
};

export default TProduct;
