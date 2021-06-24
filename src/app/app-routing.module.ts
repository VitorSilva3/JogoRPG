import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArenaComponent } from './components/arena/arena.component';
import { CreateCharComponent } from './components/home-page/Childrens/create-char/create-char.component';
import { CriarArmaComponent } from './components/home-page/Childrens/criar-arma/criar-arma.component';
import { TreinarComponent } from './components/home-page/Childrens/treinar/treinar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegistoComponent } from './components/registo/registo.component';

const routes: Routes = [
  {path: "", component : LogInComponent},
  {path: "registar", component : RegistoComponent},
  {path: "Home", component : HomePageComponent,
    children: [
      {path: 'CreateChart', component : CreateCharComponent},
      {path: 'Treinar', component : TreinarComponent},
      {path: 'CriarArma', component : CriarArmaComponent},
    ]},
  {path: "Arena", component : ArenaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
