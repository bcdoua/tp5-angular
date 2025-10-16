import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { accessoire } from '../model/accessoire.model';
import { accessoireService } from '../service/accessoire';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accessoire',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './accessoire.html',
  styles: ``
})
export class accessoireComponent implements OnInit {
  accessoires! : accessoire[];
  constructor(private accessoireService : accessoireService){
    this.accessoires=accessoireService.listeaccessoires()
  }
 ngOnInit(): void{
   
 }
 supprimeraccessoire(accessoire : accessoire) : void{
  this.accessoireService.supprimeraccessoire(accessoire);
 }
 
}