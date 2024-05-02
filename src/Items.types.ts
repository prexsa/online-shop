export interface Items {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
  totalSum: number;
}
