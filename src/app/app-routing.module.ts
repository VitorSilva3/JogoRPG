import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCharComponent } from './components/create-char/create-char.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegistoComponent } from './components/registo/registo.component';

const routes: Routes = [
  {path: "", component : LogInComponent},
  {path: "registar", component : RegistoComponent},
  {path: "Home", component : HomePageComponent},
  {path: "CreateChart", component : CreateCharComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
