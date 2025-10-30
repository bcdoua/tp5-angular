import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Accessoire } from '../model/accessoire.model';
import { AccessoireService } from '../service/accessoire';
import { Couleur } from '../model/couleur.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-accessoire',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-accessoire.html'
})
export class addAccessoireComponent implements OnInit {

  newaccessoire = new Accessoire();
  message!: string;
  couleurs!: Couleur[];
  newidCoul!: number;
  newcouleur!: Couleur;
  myForm!: FormGroup;

  constructor(
    private accessoireService: AccessoireService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // Charger la liste des couleurs
    this.couleurs = this.accessoireService.listecouleurs();
    // Initialiser le formulaire réactif
    this.myForm = this.formBuilder.group({
      idaccessoire: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      nomaccessoire: ['', [Validators.required, Validators.minLength(3)]],
      prixaccessoire: [0, [Validators.required, Validators.min(0)]],
      dateCreation: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      idCoul: ['', Validators.required],
    });
  }

  // méthode d’ajout
  addaccessoire(): void {
    // Vérifier si l'ID existe déjà
    const existingIds = this.accessoireService.listeaccessoires().map(a => a.idaccessoire);
    if (existingIds.includes(Number(this.newaccessoire.idaccessoire))) {
      alert("Cet ID existe déjà ! Veuillez en choisir un autre.");
      return;
    }

    // Créer l'accessoire à ajouter
    const accessoireToAdd: Accessoire = {
      idaccessoire: this.newaccessoire.idaccessoire,
      nomaccessoire: this.newaccessoire.nomaccessoire,
      prixaccessoire: this.newaccessoire.prixaccessoire,
      dateCreation: this.newaccessoire.dateCreation,
      email: this.newaccessoire.email,
      couleur: this.accessoireService.consultercouleur(this.newidCoul),
    };

    // Ajouter et rediriger
    this.accessoireService.ajouteraccessoire(accessoireToAdd);

    // Réinitialiser le formulaire
    this.newaccessoire = new Accessoire();
    this.newidCoul = 0;

    this.router.navigate(['accessoire']);
  }
}
