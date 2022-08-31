import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardComponent } from '../card/card.component';
import { Livraison } from '../shared/models/livraison';
import { LivraisonService } from '../shared/services/livraison.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {
  livraisons!: Livraison[];
  codeNumber:string="";
  data: any;
  
  constructor(
    private livraisonServ:LivraisonService,
    private modalCtrl: ModalController,
    private barcodeScanner: BarcodeScanner
    ) { }

  ngOnInit(): void {
    this.livraisonServ.getLivraison().subscribe(livraison =>{
      this.livraisons=livraison;
      console.log(livraison);
      
    })
  }
  async setOpen(){
    const modal = await this.modalCtrl.create({
      component: CardComponent
    })
    return await modal.present();
  }

  scan() {
    this.data = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }
  

}
