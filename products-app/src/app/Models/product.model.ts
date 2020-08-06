export interface Product {
    id: number;
    name: string;
    sku: string;
    barcode: string;
    image: string;
    price: string;
    enabled: boolean;
    stock: Stock;
  }
  
  export interface Stock {
    id: number;
    quantity: number;
    status: string;
    warehouse: Warehouse;
  }
  
  export interface Warehouse {
    id: number;
    name: string;
    city: string;
  }
  