import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { BukitasComponent } from './bukitas/bukitas.component';
import { BasicoComponent } from './basico/basico.component';
import { PersonalizadoComponent } from './personalizado/personalizado.component';
import { PremiumComponent } from './premium/premium.component';
import { PatronesComponent } from './patrones/patrones.component';
import { ConjuntosComponent } from './conjuntos/conjuntos.component';
import { ComplementosComponent } from './complementos/complementos.component';


const routes:Routes = [
  {path:'' , component: InicioComponent},
  {path:'contacto' , component: ContactoComponent},
  {path:'bukitas' , component: BukitasComponent},
  {path:'basico' , component: BasicoComponent},
  {path:'premium' , component: PremiumComponent},
  {path:'personalizado' , component: PersonalizadoComponent},
  {path:'patrones' , component: PatronesComponent},
  {path:'conjuntos' , component: ConjuntosComponent},
  {path:'complementos' , component: ComplementosComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    ContactoComponent,
    FooterComponent,
    BukitasComponent,
    BasicoComponent,
    PersonalizadoComponent,
    PremiumComponent,
    PatronesComponent,
    ConjuntosComponent,
    ComplementosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
