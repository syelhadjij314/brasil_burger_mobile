import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { CommandeService } from './commande.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlLogin= "http://localhost:8000/api/login_check";

  headers: HttpHeaders;
  idUser!:number;

  constructor(
    private http : HttpClient,
    private route:Router,
    private storageServ : StorageService,
    private commandeServ : CommandeService
    ) {
    const token = this.storageServ.get('token');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer' + token);
  }

  findLogin(user: User){
    return this.http.post(this.urlLogin, user)
  }
  isLoogedIn(){
    // let loginToken:string="";    
    return this.storageServ.get('token')!= null
  }
  isLoogedOut(){    
    this.storageServ.remove('token')
    this.storageServ.remove('id')
    this.route.navigate(['/securite']);
  }

  haveAccess(){
    var loginToken:any = this.storageServ.get('token') || '';
    var extractedToken=loginToken.split('.')[1];
    var atobData= atob(extractedToken);
    var finalData= JSON.parse(atobData);
    if (finalData.role=='ROLE_CLIENT') {
      return true;
    }
    // console.log(finalData);
    alert("Access Denied")
    return false;
  }

  getIdUser(user:User):number{
    this.http.post(this.urlLogin, user).subscribe(
      (userConnect:any)=>{
        if (userConnect['token']) {        
          this.storageServ.set('token',userConnect['token']);          
        }
        this.idUser=userConnect['id']
      }
    )
    return this.idUser
  }
  
}
