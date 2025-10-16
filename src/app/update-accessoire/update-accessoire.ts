import { Component, OnInit } from '@angular/core';
import { accessoireService } from '../service/accessoire';
import { ActivatedRoute, Router } from '@angular/router';
import { accessoire } from '../model/accessoire.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { couleur } from '../model/couleur.model';

@Component({
  selector: 'app-update-accessoire',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-accessoire.html',
  styles: ``
})
export class Updateaccessoire implements OnInit {
  currentaccessoire! : accessoire;
  couleurs! : couleur[];
  updatedCatId! : number;
  constructor(private accessoireService : accessoireService ,private activatedRoute : ActivatedRoute , private route : Router
  ){
  }
  ngOnInit(): void {
    this.couleurs = this.accessoireService.listecouleurs();
    this.currentaccessoire=this.accessoireService.consulteraccessoire(this.activatedRoute.snapshot.params['id'])
    this.updatedCatId=this.currentaccessoire.couleur.idCat;

  }
  updateaccessoire(){
    this.currentaccessoire.couleur=this.accessoireService.consultercouleur(this.updatedCatId);
    this.accessoireService.updateaccessoire(this.currentaccessoire);
    this.route.navigate(['accessoire']);
  }
 }