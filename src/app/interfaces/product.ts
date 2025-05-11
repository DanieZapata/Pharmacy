export interface Product {
    idProduct?: number;         
    nameProduct: string;       
    priceProduct: number;       
    lote: string;              
    amount: number;              
    expiration: string;        
    composition: string;        
    description: string;         
    laboratoryId: number | null; 
  }
  