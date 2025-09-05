import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDescription } from '../../../interfaces/iproduct.interface';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-description-product',
  imports: [],
  templateUrl: './description-product.component.html',
  styleUrl: './description-product.component.css'
})
export class DescriptionProductComponent {

  // Deberia saber que producto he cargado para obtener el objeto de descripcion de ese producto
  // Lo que necesito saber es el producto que he cargado

  activateRoute = inject(ActivatedRoute) ;
  descriptionData! : IDescription;

  productService = inject(ProductsService);

  ngOnInit() {

    // Hemos de tener en cuenta que en una ruta hija, tenemos que recuperarlo el valor de la ruta padre
    this.activateRoute.parent?.params.subscribe((params : any ) => {
      
      const id = Number(params.idProduct);

      const response = this.productService.getDescriptionById(id) ;

      if (response) {
        this.descriptionData = response ;
      }
      
    })

  }


}
