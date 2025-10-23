import { Component, OnInit } from '@angular/core';
import { AccessoireService } from '../service/accessoire';
import { ActivatedRoute, Router } from '@angular/router';
import { Accessoire } from '../model/accessoire.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Couleur } from '../model/couleur.model';

@Component({
  selector: 'app-update-accessoire',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-accessoire.html',
  styles: ``
})
export class Updateaccessoire implements OnInit {
  currentaccessoire! : Accessoire;
  couleurs! : Couleur[];
  updatedCatId! : number;
  constructor(private AccessoireService : AccessoireService ,private activatedRoute : ActivatedRoute , private route : Router
  ){
  }
  ngOnInit(): void {
    this.couleurs = this.AccessoireService.listecouleurs();
    this.currentaccessoire=this.AccessoireService.consulteraccessoire(this.activatedRoute.snapshot.params['id'])
    this.updatedCatId=this.currentaccessoire.couleur.idCoul;

  }
  updateaccessoire(){
    this.currentaccessoire.couleur=this.AccessoireService.consultercouleur(this.updatedCatId);
    this.AccessoireService.updateaccessoire(this.currentaccessoire);
    this.route.navigate(['accessoire']);
  }
 }