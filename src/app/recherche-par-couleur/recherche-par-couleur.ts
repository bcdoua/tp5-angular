import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Accessoire } from '../model/accessoire.model';
import { AccessoireService } from '../service/accessoire'; 
import { RouterModule } from '@angular/router'; // <-- corrigé
import { Couleur } from '../model/couleur.model';

@Component({
  selector: 'app-recherche-par-couleur',
  imports: [CommonModule, FormsModule, RouterModule], // <-- RouterLink remplacé par RouterModule
  templateUrl: './recherche-par-couleur.html',
  styles:``
})
export class RechercheParcouleurComponent implements OnInit {
  accessoires!: Accessoire[];
  Idcouleur!: number;
  couleurs: Couleur[] = [];
  constructor(private accessoireService: AccessoireService) { 
  }
  ngOnInit(): void {
    this.couleurs=this.accessoireService.listecouleurs();
    this.accessoires=[]
  }

  supprimeraccessoire(acc: Accessoire) {
    //supprimer l'accessoire acc du tableau accessoires
    const index = this.accessoires.indexOf(acc, 0);
    if (index > -1) {
      this.accessoires.splice(index, 1);
    }
    //ou Bien
    /*  this.accessoires.forEach((cur, index) => {
          if(acc.idaccessoire === cur.idaccessoire {
                this.accessoires.splice(index, 1);
             }
       }); */
  }

  onChange() {
    console.log(this.Idcouleur);
    this.accessoires = this.accessoireService.rechercherParcouleur(this.Idcouleur);
  }
}
