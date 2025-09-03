import { Injectable } from '@angular/core';
import { SERVICIOS } from '../db/trabajos.db';
import { Iservicio } from '../interfaces/iservicio.interface';

@Injectable({
  providedIn: 'root'
})
export class WorksInterface {
  private arrServicios: Iservicio[] = SERVICIOS ;

  // Voy a permitir Listar todos los servicio de mi empresa
  getAll() : Iservicio[] {
    return this.arrServicios
  }


  // ver la información de un servicio voy a recibir un dato que me identifique al producto
  // que quiero ver
  getById(url:string) : Iservicio | undefined {
    return this.arrServicios.find( servicio => servicio.url === url) ;
  }
}
