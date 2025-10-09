import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Accessoire } from '../model/accessoire.model';
import { AccessoireService } from '../service/accessoire';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accessoire',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './accessoire.html',
})
export class AccessoireComponent implements OnInit {
  accessoires: Accessoire[];

  constructor(private accessoireService: AccessoireService) {
    this.accessoires = accessoireService.listAccessoire();
  }

  ngOnInit(): void {}

  supprimerAccessoire(accessoire: Accessoire): void {
    this.accessoireService.supprimerAccessoire(accessoire);
  }
}
