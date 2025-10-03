import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-produit',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-produit.html',
  styles: ``
})
export class UpdateProduit implements OnInit {
  currentProduit! : Produit;
  constructor(private ProduitService : ProduitService ,private activatedRoute : ActivatedRoute , private route : Router
  ){
  }
  ngOnInit(): void {
    this.currentProduit=this.ProduitService.consulterProduit(this.activatedRoute.snapshot.params['id'])
  }
  updateProduit(){
    this.ProduitService.updateProduit(this.currentProduit);
    this.route.navigate(['produit']);
  }
 }
