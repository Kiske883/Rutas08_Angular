import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../interfaces/iproduct.interface';
import { PRODUCTOS } from '../../db/productos.db';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  // Inyectamos el servicio 

  productsService = inject(ProductsService) ;
  arrayProductos: IProduct[] = PRODUCTOS ;

  ngOnInit() {
    this.arrayProductos = this.productsService.getAll()
  }

}
