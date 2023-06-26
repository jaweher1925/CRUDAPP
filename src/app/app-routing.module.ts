import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AfficherlisteComponent } from './afficherliste/afficherliste.component';
import { AjoutComponent } from './ajout/ajout.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'' ,component:FirstPageComponent }, //n'affiche rien que first page pa de path 
  {path:'',component:AfficherlisteComponent}, //affiche all
  {path:'list',component:AfficherlisteComponent},
  {path:'ajout',component:AjoutComponent},
  {path:'update/:id',component:UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
