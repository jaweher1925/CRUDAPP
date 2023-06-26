import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-afficherliste',
  templateUrl: './afficherliste.component.html',
  styleUrls: ['./afficherliste.component.css']
})


export class AfficherlisteComponent implements OnInit {
 
  produits: any;

  constructor(public _shared :SharedService){}
    ngOnInit():void{

      this._shared.getAllProd()
      .subscribe(
        res=>{
          console.log(res);
          this.produits =res;
        },
        err=>{
          console.log(err);
        }
      )
      

  }

  delete(id : any){
    this._shared.deleteProd(id)
    .subscribe(
      res=>{
        console.log(res);
        this.ngOnInit();
        
      },
      err=>{
        console.log(err);
      })

   }

}
