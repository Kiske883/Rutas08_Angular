import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { Error404Component } from './pages/error404/error404.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full' , redirectTo: 'home'},
    {path: 'home',component: HomeComponent},
    {path: 'contacto',component: ContactoComponent},
    {path: 'galeria',component: GaleriaComponent},
    {path: 'nuestros-servicios',component: OurServicesComponent},
    {path: '**', component: Error404Component}
];
