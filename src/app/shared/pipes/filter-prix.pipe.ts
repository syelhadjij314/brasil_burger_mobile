import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from '../models/produit';

@Pipe({
  name: 'filterPrix'
})
export class FilterPrixPipe implements PipeTransform {

  transform(produits: Produit[], zoneSearch : number){
    if(!produits || !zoneSearch){
      return produits;
    }
    return produits.filter(produit=>{
      produit.prix > zoneSearch
    });
  }

}
