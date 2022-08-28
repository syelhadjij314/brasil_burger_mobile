import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogue } from '../shared/models/catalogue';
import { Detail } from '../shared/models/detail';
import { Produit } from '../shared/models/produit';
import { CatalogueService } from '../shared/services/catalogue.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss']
})
export class DetailPage implements OnInit{
  prods$ : Observable<Produit> | null = null;

  produit! : Detail;

  constructor(
    private catalogueServ:CatalogueService,
    private route:ActivatedRoute,
    ) {}
  ngOnInit(): void {
    const id= this.route.snapshot.params['id']
      this.catalogueServ.produitId$(id).subscribe(data =>{
        this.produit=data
        // console.log(data);        
      });
    
  }

}
