import { Injectable } from '@angular/core';
import { Produit } from '../model/accessoire.model';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
   produits: Produit[];
  constructor() {
    this.produits = [
      {
        idProduit: 1,
        nomProduit: 'PC Asus',
        prixProduit: 3000.6,
        dateCreation: new Date('01/14/2011'),
      },
      {
        idProduit: 2,
        nomProduit: 'Imprimante Epson',
        prixProduit: 450,
        dateCreation: new Date('12/17/2010'),
      },
      {
        idProduit: 3,
        nomProduit: 'Tablette Samsung',
        prixProduit: 900.123,
        dateCreation: new Date('02/20/2020'),
      },
    ];
  }
  listProduit() : Produit[]{
    return this.produits;
  }
  addProduit(nwProduit : Produit): void{
    this.produits.push(nwProduit);
  }
  supprimerProduit(produit : Produit) : void{
  let conf=confirm("vous etes sur ?");
  if (conf) {
    const index=this.produits.indexOf(produit);
  if (index>-1) {
    this.produits.splice(index,1);
  }
  }
 }
 consulterProduit(id:number): Produit{
  return this.produits.find(p => p.idProduit == id)!;

}
updateProduit(prod: Produit){
 const index = this.produits.indexOf(prod, 0);
 if (index > -1) {
    this.produits.splice(index, 1);
    this.produits.splice(index,0,prod);
  }
 }
}
