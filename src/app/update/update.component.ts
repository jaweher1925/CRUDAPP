import { Conditional } from '@angular/compiler';
import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  implements OnInit{
  produit :any;
  id:any;
  constructor( private act:ActivatedRoute, private _shared:SharedService){}


  updateProd(){
    console.log('wokkkssss!!');
    this._shared.updateProd(this.id,this.produit)
    .subscribe(
      res=>{
        this.produit =res;
      },
      err=>{
        console.log(err);
      })}
      
  

  
  ngOnInit():void{
        this.id =this.act.snapshot.paramMap.get('id');


         this._shared.getProdById(this.id)
          .subscribe(
            res=>{
              this.produit =res;
            },
            err=>{
              console.log(err);
            }
        
          );

     this.updateProd();
      }

}
