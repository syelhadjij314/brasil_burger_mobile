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
  produitTab!:Produit[];
  produits! : Catalogue|null;
  maxPrice!:number;
  minPrice!:number;

  // @Input('produits') prod! : Produit;
  constructor(private catalogueServ:CatalogueService,
    private route:Router,private routes:ActivatedRoute) {}
  ngOnInit(): void {
    this.catalogueServ.getCatalogue().subscribe(
      (data) => {
        this.produits = data;
        this.produit = this.produits.produit
        this.produitTab=this.produit;
        this.maxPrice=this.produitTab.reduce((op, item)=> op=op >item.prix? op:item.prix,0);
        this.minPrice=this.produitTab.reduce((op, item)=> op=op <=item.prix? op:item.prix,0)   
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
  pinFormatter(value: number){
    return `${value}FCFA`;
  }
  onIonKnobMoveEnd(e:any){
    this.produit=this.produitTab.filter((product =>{
      return(
        product.prix >=e.detail.value.lower &&
        product.prix <=e.detail.value.upper
        )
    }))
  }
  
}
