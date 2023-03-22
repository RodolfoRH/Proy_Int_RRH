import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'jobs/:id', component: EditarExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
