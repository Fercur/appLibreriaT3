import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionLibrosComponent } from './components/gestion-libros/gestion-libros.component';
import { LibrosComponent } from './components/libros/libros.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RecomendadosComponent } from './components/recomendados/recomendados.component';
import { adminGuardGuard } from './guards/admin-guard.guard';
import { invitadosGuardGuard } from './guards/invitados-guard.guard';

const routes: Routes = [
  {path:"gestion",component:GestionLibrosComponent,canActivate:[adminGuardGuard]},
  {path:"libros",component:LibrosComponent},
  {path:"login",component:LogInComponent},
  {path:"recomendados",component:RecomendadosComponent,canActivate:[invitadosGuardGuard]},
  {path:"",redirectTo:"login",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
