import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produit',
  imports: [CommonModule,RouterLink],
  standalone: true,
  templateUrl: './produit.html',
})
export class ProduitComponent implements OnInit {
  produits : Produit[];
  constructor(private produitService : ProduitService){
    this.produits=produitService.listProduit()
  }
 ngOnInit(): void {
   
 }
 supprimerProduit(produit : Produit) : void{
  this.produitService.supprimerProduit(produit);
 }
 
}
