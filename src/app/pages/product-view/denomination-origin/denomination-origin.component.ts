import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrigen } from '../../../interfaces/iproduct.interface';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-denomination-origin',
  imports: [],
  templateUrl: './denomination-origin.component.html',
  styleUrl: './denomination-origin.component.css'
})
export class DenominationOriginComponent {

  activateRoute = inject(ActivatedRoute) ;
  originData! : IOrigen ;
  productsService = inject(ProductsService) ;

  ngOnInt() {

    this.activateRoute.parent?.params.subscribe( (params:any) => {

      const id: number = Number(params.idProduct) ;
      const response = this.productsService.getDenominationById(id) ;
      if ( response) {
        this.originData = response ;
      }
      
    }) ;

  }

}
