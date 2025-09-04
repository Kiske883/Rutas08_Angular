import { Component, inject, Input } from '@angular/core';
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

  // Opcion 2 : 
  // Importante : Hemos de cargar el withComponentInputBinding() en app.config.ts
  @Input() url: string = "" ; 

  trabajo! : IServicio;

  workservice = inject(WorksInterface);
  router = inject(Router);

  ngOnInit() {

    const response = this.workservice.getByUrl(this.url) ;

    if (!response) {
      this.router.navigate(['/Error']) ;
    } 
    // La admiracion del response, le estoy diciendo que no se preocupe que el response ya lo tengo controlado
    // Una forma de escapar la correcion de errores de type script
    this.trabajo = response! ; 

  }


}
