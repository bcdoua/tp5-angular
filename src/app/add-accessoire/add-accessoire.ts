import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Accessoire } from '../model/accessoire.model';
import { AccessoireService } from '../service/accessoire';
import { Couleur } from '../model/couleur.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-accessoire',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-accessoire.html'
})
export class addAccessoireComponent implements OnInit {


  newaccessoire = new Accessoire();
  message!: string;
  couleurs!: Couleur[];
  newidCoul!: number;
  newcouleur!: Couleur;

  constructor(
    private AccessoireService: AccessoireService,
    private router: Router
  ) {}

  ngOnInit() {
    this.couleurs = this.AccessoireService.listecouleurs();
  }

  addaccessoire() {
    this.newcouleur = this.AccessoireService.consultercouleur(this.newidCoul);
    this.newaccessoire.couleur = this.newcouleur;
    this.AccessoireService.ajouteraccessoire(this.newaccessoire);
    this.router.navigate(['accessoire']);
  }
}
