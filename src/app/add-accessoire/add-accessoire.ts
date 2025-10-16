import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { accessoire } from '../model/accessoire.model';
import { accessoireService } from '../service/accessoire';
import { couleur } from '../model/couleur.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-accessoire',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-accessoire.html'
})
export class AddaccessoireComponent implements OnInit {

  newaccessoire = new accessoire();
  message! : string;
  couleurs! : couleur[];
  newIdCat! : number;
  newcouleur! : couleur;


  constructor(private accessoireService: accessoireService,
              private router :Router
   ) {}



  ngOnInit() {
    this.couleurs = this.accessoireService.listecouleurs();
  }


  addaccessoire(){this.newcouleur = this.accessoireService.consultercouleur(this.newIdCat);
    this.newaccessoire.couleur = this.newcouleur;
    this.accessoireService.ajouteraccessoire(this.newaccessoire);
    this.router.navigate(['accessoire']);

  }


}