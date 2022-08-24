import { Produit } from "./produit"

export interface Catalogue {
    burgers:Produit[]
    menus:Produit[]
    produit:Produit[]
    ["hydra:member"]: [{"menus":Produit[]},{"burgers": Produit[]}]   
}