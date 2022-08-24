import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Catalogue } from '../models/catalogue';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../models/produit';


@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private apiCatalogue="http://127.0.0.1:8000/api/catalogues"
  private apiProduit="http://127.0.0.1:8000/api/produits"
  private apiDetail="http://127.0.0.1:8000/api/details"



  constructor(
    private http:HttpClient
    ) { }
  getCatalogue():Observable<Catalogue> {
    return this.http.get<Catalogue>(this.apiCatalogue).pipe(
      map(        
        data => {          
          data.produit  = [...data["hydra:member"][0].menus,
          ...data["hydra:member"][1].burgers]
          data.burgers=data["hydra:member"][1].burgers
          data.menus=data["hydra:member"][0].menus
          // console.log(data.produit);
          return data
        }
      ),
    )    
  }
  produitId$ = (id:number) => {
    return this.http.get<any>(`${this.apiDetail}/${id}`)
  }
  all():Observable <Produit> {     
    return this.http.get<Produit>(this.apiProduit)
    
  }
}
