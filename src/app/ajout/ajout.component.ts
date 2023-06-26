import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
    produit ={
        name:'',
        about:'',
        prix:null,
        image:'',
    }

  produits : any[] =[];

  ajout(){ //ajout(): fonction pour faire appel a newProd
    console.log('woooooorkkkkssss!!');
    this._shared.creatNewProd(this.produit)
 
        .subscribe(
          res=>{
            this.produit ={
              name:'',
              about:'',
              prix:null,
              image:'',
          }
          
          },
    
          err=>{
            console.log(err);
          }
        )
  }
  
  ngOnInit():void{}

  constructor(public _shared:SharedService){}
}
 