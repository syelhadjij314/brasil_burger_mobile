import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from './shared/models/produit';
import { AuthService } from './shared/services/auth.service';
import { PanierService } from './shared/services/panier.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  object$! : Observable<Produit[]>;

  constructor(
    public authServ:AuthService,
    private panierServ: PanierService
    ) {}
  ngOnInit(): void {
    this.object$ = this.panierServ.object$;

  }
}
