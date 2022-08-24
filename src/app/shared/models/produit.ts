import { Boisson } from "./boisson";
import { Menu } from "./menu";

export interface Produit {
    id:number,
    nom:string,
    prix:number,
    image:Blob,
    ["@type"]: Menu | Boisson,
    boissons?:[]
    burgers?:[],
    frites?:[],
    qnt?:number,
    produits?:[],
}