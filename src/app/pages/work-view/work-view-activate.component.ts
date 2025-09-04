import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { WorksInterface } from '../../services/works.service';
import { IServicio } from '../../interfaces/iservicio.interface';

@Component({
  selector: 'app-work-view',
  imports: [RouterLink],
  templateUrl: './work-view.component.html',
  styleUrl: './work-view.component.css'
})

export class WorkViewComponent {

  // Necesito saber cual es el dato que debo cargar de mi servicio
  // En este caso puedo extraer de la url de mi navegador lo que quiero 
  // visualizar

  // Opcion 1 : ActivateRoute => Es un inyectable de la libreria de rutas
  activateRoute = inject(ActivatedRoute);

  // Es un error en el nombre del works.service.ts que en el momento de crearlo lo añadir como interface
  workservice = inject(WorksInterface);

  router = inject(Router);

  // trabajo! = IServicio;
  trabajo! : IServicio;

  // Cuando cargamos en el componente le preguntamos al activateRoute cual es mi parametro de ruta activo
  // Esta es la parte variable de la ruta
  ngOnInit() {

    // activateRoute es un observable, observable es un elemento que esta pregutnando 
    // todo el rato para saber los cambios

    this.activateRoute.params.subscribe( (params : any ) => {

      const url = params.url.toLowerCase() ; 
      // Y ahora con esta información voy a consultar al servicio que work tiene esa url 

      const response = this.workservice.getByUrl(url);

      if ( response !== undefined) {
        // tengo lo que quiero 
        this.trabajo = response ;
      } else {
        // Y si no lo redirigimos a la 404
        // Realmente podriamos redirigirnos con **, pero así conseguimos que en la url de la pagina 404, muestre /error        
        this.router.navigate(['/error']);
      }

    });
  }

}
