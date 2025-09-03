import { Component, inject } from '@angular/core';
import { Iservicio } from '../../interfaces/iservicio.interface';
import { WorksInterface } from '../../services/works.service';

@Component({
  selector: 'app-our-services',
  imports: [],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {

  // Vamos a utilizar el servicio
  workservice = inject(WorksInterface);
  arrayServicio : Iservicio[] = [] ;
  ngOnInit() {

    this.arrayServicio = this.workservice.getAll();

  }

}
