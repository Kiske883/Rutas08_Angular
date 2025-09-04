import { Component, Input } from '@angular/core';
import { IServicio } from '../../interfaces/iservicio.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-work-card',
  imports: [RouterLink],
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.css'
})
export class WorkCardComponent {
  
  // Con la admiración conseguimos que no nos obligue a inicializar el objeto
  @Input() miServicio!: IServicio;
}
