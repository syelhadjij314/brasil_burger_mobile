import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Commande } from '../shared/models/commande';
import { User } from '../shared/models/user';
import { CommandeService } from '../shared/services/commande.service';
import { StorageService } from '../shared/services/storage.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.page.html',
  styleUrls: ['./detail-commande.page.scss'],
})
export class DetailCommandePage implements OnInit {

  user:User={};
  prods$ : Observable<Commande> | null = null;
  myCommand!:any;
  loginToken:string;
  idUserConnected:number=2;
  tokenDecode:any;
  // idUserConnected:number=2;
  constructor(
    private commandeServ : CommandeService,
    private route : ActivatedRoute,
    private storageServ: StorageService,
    private userServ: UserService

    ) { }

  ngOnInit() {
    const id= this.route.snapshot.params['id']
    this.storageServ.get('token').then(val=>{
      console.log(val);      
      this.loginToken=val
      this.tokenDecode =this.commandeServ.getDecodedAccessToken(val)
      
      if (this.tokenDecode.roles[1]=='ROLE_CLIENT'){        
        this.commandeServ.commandeId$(id).subscribe((command:Commande)=>{
          this.myCommand=command
          console.log(command);          
        })
      }          
    })

  }
  

}
