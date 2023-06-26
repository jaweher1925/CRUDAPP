import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/products';

       constructor(private http: HttpClient) { } //perform HTTP requests.(constractr)

      getAllProducts(): Observable<any> {
        return this.http.get(this.apiUrl);
      }

      createProduct(productData: any): Observable<any> {
        return this.http.post(this.apiUrl, productData);
      }

  // Add more methods for update, delete, etc. as needed

}
