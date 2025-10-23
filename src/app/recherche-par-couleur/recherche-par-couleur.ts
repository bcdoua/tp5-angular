import { Component, OnInit } from '@angular/core';
import { Accessoire } from '../model/accessoire.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccessoireService } from '../service/accessoire'; 
import { Couleur } from '../model/couleur.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recherche-par-couleur',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './recherche-par-couleur.html',
  styleUrls: ['./recherche-par-couleur.css']
})
export class RechercheParcouleurComponent implements OnInit {
  accessoires: Accessoire[] = [];
  Idcouleur!: number;
  couleurs: Couleur[] = [];

  constructor(private accessoireService: AccessoireService) { 
    this.couleurs = accessoireService.listecouleurs();
    this.accessoires = [];
  }

  onChange() {
    console.log(this.Idcouleur);
    this.accessoires = this.accessoireService.rechercherParcouleur(this.Idcouleur);
  }

  supprimeraccessoire(event: Accessoire) { 
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.accessoireService.supprimeraccessoire(event);
      this.accessoires = this.accessoireService.rechercherParcouleur(this.Idcouleur);
    }
  }

  ngOnInit(): void {}
}
