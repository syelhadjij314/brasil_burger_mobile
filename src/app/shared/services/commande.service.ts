import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Commande } from '../models/commande';
import jwt_decode from 'jwt-decode';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private urlCommande= "http://localhost:8000/api/commandes";
  private urlCommandeUser= "http://localhost:8000/api/users";

  tabCommande : Array<any> =[]
  // headers:HttpHeaders;
  dateTime:Date= new Date();
  userToken:string;
  constructor(
    private http : HttpClient,
    private storageServ : StorageService,
    ){
    this.getToken();    
  }
  async getToken(){
    await this.storageServ.get('token').then(tok=>{
      this.userToken = tok
    });
      console.log(this.userToken)    
  }

  commandeId$ = (id:number) => {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.userToken);
    return this.http.get<any>(`${this.urlCommande}/${id}`,{headers: headers});    
  }
  
  getCommande(): Observable<any> {
    return this.http.get<any>(this.urlCommande).pipe(
      map(
        (response:any) => response["hydra:member"]
      )
    );
  }

  postCommande(body: any){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.userToken);
    this.http.post<Commande>(this.urlCommande,body,{ headers: headers }).subscribe((response) =>
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
  
}
