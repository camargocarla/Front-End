import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './paginas/inicio/inicio.component';

import { AdminComponent } from './paginas/admin/admin.component';
import { ListaComponent } from './paginas/lista/lista.component';
import { RouterModule, Routes } from '@angular/router';
import { Autenticar } from './autenticar.guard';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'admin', component: AdminComponent, canActivate:[Autenticar]},
  { path: 'lista', component: ListaComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
