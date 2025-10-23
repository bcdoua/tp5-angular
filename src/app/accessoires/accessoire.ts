import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Accessoire } from '../model/accessoire.model';
import { AccessoireService } from '../service/accessoire';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-Accessoires',
  imports: [CommonModule,RouterLink],
  templateUrl:'./accessoire.html',
})
export class AccessoiresComponent implements OnInit { 
  Accessoires : Accessoire []=[]; 


  constructor(private AccessoireService: AccessoireService )
   { this.Accessoires = AccessoireService.listeaccessoires(); }

  supprimerAccessoire(event: Accessoire) { 
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
     if (conf)
   this.AccessoireService.supprimeraccessoire(event); }



  ngOnInit(): void {

  }
}