import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { InventarioComponent } from './inventario/inventario.component';
import { SliderComponent } from './slider/slider.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ServicioAguacateComponent } from './servicios/informacion-Servicios/servicio-aguacate/servicio-aguacate.component';
import { ServicioAlmacigoComponent } from './servicios/informacion-Servicios/servicio-almacigo/servicio-almacigo.component';
import { ServicioProductosAComponent } from './servicios/informacion-Servicios/servicio-productos-a/servicio-productos-a.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    PiePaginaComponent,
    InventarioComponent,
    SliderComponent,
    ServiciosComponent,
    ContactosComponent,
    ServicioAguacateComponent,
    ServicioAlmacigoComponent,
    ServicioProductosAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
