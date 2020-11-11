import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes:Routes = [
  {path:'' , component: InicioComponent},
  {path:'contacto' , component: ContactoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    ContactoComponent
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
