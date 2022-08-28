import { Commande } from "./commande";
import { User } from "./user";

export interface Livraison{
    "commandes": Commande[],
    "livreur": User        
}