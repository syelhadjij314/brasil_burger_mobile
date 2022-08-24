import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Catalogue } from '../shared/models/catalogue';
import { Produit } from '../shared/models/produit';
import { CatalogueService } from '../shared/services/catalogue.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'catalogue.page.html',
  styleUrls: ['catalogue.page.scss']
})
export class CataloguePage implements OnInit{
  produit! : any;
  produits! : Catalogue|null;
  // @Input('produits') prod! : Produit;
  constructor(private catalogueServ:CatalogueService,
    private route:Router,private routes:ActivatedRoute) {}
  ngOnInit(): void {
    this.catalogueServ.getCatalogue().subscribe(
      (data) => {
        this.produits = data;
        this.produit = this.produits.produit
        // console.log(data);
      }
    )    
  }
  showProduits(option:string){
    // alert(option)
    option == "burgers" ? 
      this.produit = this.produits?.burgers :
        this.produit= this.produits?.menus 
  }
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
          delay: 4000
    }
  }
  
}
