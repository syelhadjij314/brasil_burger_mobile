import { Produit } from "./produit"

export interface Detail {
    
    produit: Produit
    boissons: Produit[]
    frites: Produit[]
}