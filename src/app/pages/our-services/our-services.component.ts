import { Component, inject } from '@angular/core';
import { IServicio } from '../../interfaces/iservicio.interface';
import { WorksInterface } from '../../services/works.service';
import { WorkCardComponent } from '../../components/work-card/work-card.component';

@Component({
  selector: 'app-our-services',
  imports: [WorkCardComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {
  
  // Vamos a utilizar el servicio
  workservice = inject(WorksInterface);
  arrayServicio : IServicio[] = [] ;
  
  ngOnInit() {

    this.arrayServicio = this.workservice.getAll();

  }

}
