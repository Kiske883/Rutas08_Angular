import { Component, inject, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';
import { ProductsService } from '../../services/products.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-view',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

  @Input() idProduct : string = "" ;

  myProduct!: IProduct ;

  productsService = inject(ProductsService);
  router = inject(Router);

  ngOnInit() {
    const id: number = Number(this.idProduct) ;
    const response = this.productsService.getById(id);
    if ( !response) {
      this.router.navigate(['/Error']) ;
    }

    this.myProduct = response! ; 
  }


}
