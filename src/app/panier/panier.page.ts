import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Produit } from '../shared/models/produit';
import { DetailService } from '../shared/services/detail.service';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'panier.page.html',
  styleUrls: ['panier.page.scss']
})
export class PanierPage implements OnInit{
  @Input('produits') prod!: Produit;
  @Input('') detail! : any | null; 
  @Input() prixCommande:number=this.calculatePriceTotalCommande()
  // @Input('produits') prod!:Produit|null|undefined;

  // object$! : Observable<Produit[]>;
  quantity:any;
  constructor(
    private detailServ: DetailService,
    private route : ActivatedRoute,
    private panierServ :PanierService
    ) { }

    object$ = this.panierServ.object$

  ngOnInit(): void {
    this.calculatePriceTotalCommande()
    // console.log(this.object$);
    console.log(this.object$);
    
  }  
  supprimerProduitAuPanier(prod:Produit) {
    this.panierServ.ajouterAuPanier(prod,"off")
  }
  calculatePrice(prod:Produit,quantity:any){
    this.panierServ.recupValueQuantity(prod,quantity)
  }
  calculatePriceTotalCommande(){
    return this.prixCommande= this.panierServ.calculatePriceCommande()
  } 

}
