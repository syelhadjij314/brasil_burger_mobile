import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Livraison } from '../shared/models/livraison';
import { LivraisonService } from '../shared/services/livraison.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() livraisons!: Livraison[];

  constructor(
    private modalCtrl : ModalController,
    private livraisonServ: LivraisonService
    ) { }
    
  ngOnInit(): void {
    this.livraisonServ.getLivraison().subscribe(livraison =>{
      this.livraisons=livraison;
      console.log(livraison);
      
    })
  }
  async closeModal(){
    return this.modalCtrl.dismiss();
  }
  createQrCode(){

  }
  
}
