import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }
   private url ='http://127.0.0.1:5000/'; //link backend


  //fonctiont3ml request lil back eli bch tab3thou li back en parametre (objet)
  creatNewProd(produit: any){
    console.log("creatnewprod work!");
      return this.http.post(this.url +'api/prod/ajout', produit); //-> traje3 respon min and el back
  
    }
//afficher
    getAllProd(){
      console.log("getallprod work!");
        return this.http.get(this.url + 'api/prod/all'); //afficher
    }

    getProdById(id :any){
      return this.http.get(this.url +'api/prod/getbyid/' + id);
    }
  
//delete
    deleteProd(id:any){

      console.log("delete work!");
      return this.http.delete(this.url + 'api/prod/supprimer/' + id);
      
    }

updateProd(id: any , prod:any): Observable<any> {
  return this.http.patch(this.url + 'api/prod/update/' + id, prod)
}
  
  }