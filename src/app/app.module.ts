import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AjoutComponent } from './ajout/ajout.component';
import { AfficherlisteComponent } from './afficherliste/afficherliste.component';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    AjoutComponent,  
    AfficherlisteComponent,
    FirstPageComponent,
    UpdateComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
