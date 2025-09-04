import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { Error404Component } from './pages/error404/error404.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { WorkViewComponent } from './pages/work-view/work-view.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full' , redirectTo: 'home'},
    {path: 'home',component: HomeComponent},
    {path: 'contacto',component: ContactoComponent},
    {path: 'galeria',component: GaleriaComponent},
    {path: 'nuestros-servicios',component: OurServicesComponent},    
    // :url es el nombre de la variable que va a contener el valor variable de la url
    {path: 'nuestros-servicios/:url',component: WorkViewComponent},
    {path: 'productos',component: ProductListComponent},
    {path: 'productos/:idProduct',component: ProductViewComponent},
    {path: '**', component: Error404Component}
];
