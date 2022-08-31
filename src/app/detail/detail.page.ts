import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogue } from '../shared/models/catalogue';
import { Detail } from '../shared/models/detail';
import { Produit } from '../shared/models/produit';
import { CatalogueService } from '../shared/services/catalogue.service';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss']
})
export class DetailPage implements OnInit{
  prods$ : Observable<Produit> | null = null;
  boissons:any[]=[];
  produit!: any |null;

  constructor(
    private catalogueServ:CatalogueService,
    private route:ActivatedRoute,
    private panierServ: PanierService
    ) {}
  ngOnInit(): void {
    const id= this.route.snapshot.params['id']
      this.catalogueServ.produitId$(id).subscribe(data =>{
        this.produit=data
        
        data.produit.boissons.forEach(taille=>{
          taille.taille.boissonTailles.forEach(boisson=>{
            this.boissons.push(boisson);
          })
        })
        // console.log(this.boissons);
      });    
  }
  ajouterProduitAuPanier(prod:Produit) {
    this.panierServ.ajouterAuPanier(prod);
  }

}
