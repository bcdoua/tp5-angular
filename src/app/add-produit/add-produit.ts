import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit';
@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.html',
})
export class AddProduit implements OnInit {
  newProduit = new Produit();
  msg! : String;
  constructor(private ProduitService : ProduitService){
  }
  ngOnInit(): void {
  }
  addProduit():void{
    this.ProduitService.addProduit(this.newProduit);
    this.msg="Produit "+this.newProduit.nomProduit+" ajouté avec successé"
    alert(this.msg)
    this.newProduit= new Produit();
  }
}
