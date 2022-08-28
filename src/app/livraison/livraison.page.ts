import { Component, OnInit } from '@angular/core';
import { Livraison } from '../shared/models/livraison';
import { LivraisonService } from '../shared/services/livraison.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {
  livraisons!: Livraison[];
  constructor(private livraisonServ:LivraisonService) { }

  ngOnInit(): void {
    this.livraisonServ.getLivraison().subscribe(livraison =>{
      this.livraisons=livraison;
      console.log(livraison);
      
    })
  }

}
