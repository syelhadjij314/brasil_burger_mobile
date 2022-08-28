import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { CommandeService } from './commande.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUser = 'http://localhost:8000/api/users';

  usercom:User={}
  headers: HttpHeaders;
  userToken:string;

  constructor(private http: HttpClient,
    private storageServ : StorageService,
    private commandeServ : CommandeService,

      ) {
        this.commandeServ.getToken()
        // this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }

  getAll() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.userToken);
    return this.http.get<any>(this.urlUser, { headers: headers }).pipe(
      map(
        data => data['hydra:member']
      ));
  }
  addUser(p: User) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.userToken);
    return this.http.post(this.urlUser, p, { headers: headers });
  }
  getCommandesClient(client_id:any){
    return this.http.get(this.urlUser+"/"+client_id)
  }
  
  
}
