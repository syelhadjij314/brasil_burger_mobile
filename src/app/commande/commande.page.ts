import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/models/commande';
import { User } from '../shared/models/user';
import { CommandeService } from '../shared/services/commande.service';
import { StorageService } from '../shared/services/storage.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {
  mesCommandes!:any;
  user: User= {};
  loginToken:string;
  idUserConnected:number=2;
  tokenDecode:any;
  searchDate:any;
  etatSearch:string="en cours";

  constructor(
    private commandServ: CommandeService,
    private userServ: UserService,
    private storageServ: StorageService
  ) { }

  ngOnInit() {                          
    this.storageServ.get('token').then(val=>{
      this.loginToken=val
      this.tokenDecode =this.commandServ.getDecodedAccessToken(val)
      if (this.tokenDecode.roles[1]=='ROLE_CLIENT'){
        this.userServ.getCommandesClient(this.idUserConnected).subscribe((user:User) =>{
          this.mesCommandes=user.commandes
        })
      }          
    })
  }

  annullerCommande(id:any){  
    this.commandServ.updateCommande(id,{etat:"annuler"})  
  }
  EtatValue(etat:string){
    etat=this.etatSearch
    // console.log(etat);
    
  }
}
