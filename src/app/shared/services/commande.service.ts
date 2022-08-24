import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Commande } from '../models/commande';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private urlCommande= "http://localhost:8000/api/commandes";
  tabCommande : Array<any> =[]
  headers:HttpHeaders;
  dateTime:Date= new Date();
  constructor(private http : HttpClient){
    const token = localStorage.getItem('token');
    this.headers=new HttpHeaders().set('Authorization', 'Bearer ' + token); 
  }

  getCommande(): Observable<any> {
    return this.http.get<any>(this.urlCommande).pipe(
      map(
        (response:any) => response["hydra:member"]
      )
    );
  }
  postCommande(body: any){
    this.http.post<Commande>(this.urlCommande,body,{ headers: this.headers }).subscribe((response) =>
      console.log(response)
    )
  }
  updateCommande(id:number,body:object){
    this.http.put(this.urlCommande+"/"+id,body).subscribe()
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
  dateFiltre(){
    let date=new Date();
    let day =date.toLocaleDateString().slice(0,2);
    let month = date.toLocaleDateString().slice(3,5);
    let year= date.toLocaleDateString().slice(6);
    return year+"-"+month+"-"+day ;
    //2022-08-10
  }
}
