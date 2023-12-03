type TProduct = {
  id: string;
  name: string;
  description: string;
  qualityInStock: number;
  currentPrice?: number;
  originalPrice: number;
  discountOff?: number;
  priceUnit: string;
  soldQty: number;
  special: boolean;
};

export default TProduct;
