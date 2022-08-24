import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { AuthService } from '../shared/services/auth.service';
import { CommandeService } from '../shared/services/commande.service';

@Component({
  selector: 'app-securite',
  templateUrl: './securite.page.html',
  styleUrls: ['./securite.page.scss'],
})
export class SecuritePage implements OnInit {

  constructor(private authServ: AuthService,
    private route : Router,
    private commandServ : CommandeService) { }
    
  user: User= {}
  showError:string="d-none"
  ngOnInit() {
  }
  findLogin() {
    this.authServ.findLogin(this.user).subscribe((res:any) => {
      if (res['token']) {        
        localStorage.setItem('id',res['id'])
        localStorage.setItem('token',res['token']);
        this.commandServ.getDecodedAccessToken(res['token']);        
        this.route.navigateByUrl('/commande');        
      }
      else {
        this.route.navigate(['/securite']);
        this.showError="d-block"
      }
    });
  }

}
