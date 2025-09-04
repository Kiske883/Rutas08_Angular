import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct.interface';
import { PRODUCTOS } from '../db/productos.db';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private arrayProductos : IProduct[] = PRODUCTOS ;

  getAll() : IProduct[] {

    return this.arrayProductos;

  }

  getById(productId:number) : IProduct | undefined {
    return this.arrayProductos.find( product => product.id === productId) ;
  }
  
}
