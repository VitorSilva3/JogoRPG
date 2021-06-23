import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './components/log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import { RegistoComponent } from './components/registo/registo.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreateCharComponent } from './components/home-page/Childrens/create-char/create-char.component';
import { TreinarComponent } from './components/home-page/Childrens/treinar/treinar.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistoComponent,
    HomePageComponent,
    CreateCharComponent,
    TreinarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
