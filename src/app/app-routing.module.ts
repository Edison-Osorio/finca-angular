import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { InicioComponent } from './inicio/inicio.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path: 'inventario', component: InventarioComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'contactos', component: ContactosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
