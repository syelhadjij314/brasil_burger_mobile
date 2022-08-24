export interface User{
    id?: number;
    username?: string;
    password?: string;
    token?:string;
    roles?:string;
    prenom?:string;
    telephone?:string;
    nom?:string;
    matriculeMoto?:string;
    ["hydra:member"]?:[{ }]
}