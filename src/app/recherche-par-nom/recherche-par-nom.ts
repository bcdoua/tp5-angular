import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Accessoire } from '../model/accessoire.model';
import { AccessoireService } from '../service/accessoire'; 
import { SearchFilterPipe } from "../search-filter-pipe";

@Component({
  selector: 'app-recherche-par-nom',
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styleUrls: ['./recherche-par-nom.css']
})
export class RechercheParNom implements OnInit {
  nomaccessoire!: string;
  allaccessoires!: Accessoire[];
  accessoires: Accessoire[] = [];
  searchTerm!: string;
  Idcouleur!: number;

  constructor(private AccessoireService: AccessoireService) {} 

  ngOnInit(): void {
    this.allaccessoires = this.AccessoireService.listeaccessoires();
    this.accessoires = this.allaccessoires;
  }

  onKeyUp(filterText: string) {
    this.accessoires = this.allaccessoires.filter(item =>
      item.nomaccessoire.toLowerCase().includes(filterText)
    );
  }
}
