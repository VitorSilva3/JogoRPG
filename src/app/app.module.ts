import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './components/log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import { RegistoComponent } from './components/registo/registo.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreateCharComponent } from './components/create-char/create-char.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistoComponent,
    HomePageComponent,
    CreateCharComponent
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
