import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { AuthService } from '../shared/services/auth.service';
import { CommandeService } from '../shared/services/commande.service';
import { LoaderService } from '../shared/services/loader.service';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-securite',
  templateUrl: './securite.page.html',
  styleUrls: ['./securite.page.scss'],
})
export class SecuritePage implements OnInit {

  constructor(
    private authServ: AuthService,
    private route : Router,
    private commandServ : CommandeService,
    private storageServ:StorageService,
    private loaderService: LoaderService
    ) { }
    
  user: User= {}
  token: string;
  tokenDecode:any;
  first=true;
  ngOnInit() {
    this.findLogin()
  }
  findLogin() {
    this.authServ.findLogin(this.user).subscribe((res:any) => {
      if (res['token']) {          
        this.storageServ.set('id',res['id'])
        this.storageServ.set('token',res['token']);
        this.tokenDecode = this.commandServ.getDecodedAccessToken(res['token']);
        this.displayAutoLoader();        
        if (this.tokenDecode.roles[1]=="ROLE_CLIENT") {
          this.route.navigate(['/commande']);       
        }
        if (this.tokenDecode.roles[1]=="ROLE_LIVREUR") {
          this.route.navigate(['/livraison']);       
        }                              
      }
      else {
        this.route.navigate(['/securite']);
      }
    });
  }
  displayAutoLoader() {
    this.loaderService.autoLoader();
  }
  customizeLoader() {
    this.loaderService.customLoader();
  }

}
