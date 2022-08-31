import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Produit } from '../models/produit';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private produitSubject = new BehaviorSubject<any[]>([])
  object$: Observable<any[]> = this.produitSubject.asObservable()
  prixTotal:number=0;
  tabCommande:Array<any>=[];
  contentCartObject:any;

  constructor(private storageServ : StorageService) {
    (storageServ.get('produits').then((produit:any)=>{
      this.contentCartObject=produit
    }) || '[]')
    if (!this.contentCartObject) {
      this.contentCartObject = []
    }
    this.produitSubject.next(this.contentCartObject)
  }
  async getPanier(){
    return JSON.parse( await this.storageServ.get('produits') || '[]')
  }
  ajouterAuPanier(produit: any, action: 'One' | 'off' = 'One') {
    this.object$
      .pipe(
        take(1),
        map(async (produits) => {
          let tabProduit: Produit[] =  JSON.parse( await this.storageServ.get('produits') || '[]')
          if (action == 'One') {
            if (tabProduit) {
              let objectProduit: Produit | undefined = tabProduit.find(
                (param: { id: number }) => param.id === produit.id,
              )
              if (!objectProduit) {
                produit.qnt = 1
                produits.push(produit)
              } else {
                produits.forEach((elt) => {
                  if (elt.id === produit.id) {
                    produit.qnt++
                  }
                })
              }
            }
          } else {
            produits.splice(produits.indexOf(produit), 1)
          }
          this.storageServ.set('produits', JSON.stringify(produits))
        }),
      )
      .subscribe()
  }

  recupValueQuantity(produit:Produit ,q: any) {
    this.object$.pipe(
      take(1),
      map((produits:any)=>{
        produits.forEach((elt:any) =>{
          if (elt.id === produit.id){
            elt.qnt=q
          }
        })
        this.storageServ.set("produit",JSON.stringify(produits))
      })
    )
    .subscribe();
  }

  calculatePriceCommande(){
    this.object$.pipe(
      map(produits =>{
        produits.forEach(elt =>{
          this.prixTotal += elt.prix*elt.qnt
        })
        this.storageServ.set('produit',JSON.stringify(produits))
      })
      ).subscribe();
      return this.prixTotal
  }

  CommandeOperation(){
    this.object$.pipe(
      map((produits:any) =>{
        produits.forEach((produit:any) =>{
          this.tabCommande.push({
            'prod':produit,
            'quantite':produit.qnt
          })
        })
      })
    )
    return this.tabCommande;
  }
}
