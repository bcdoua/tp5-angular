import { Injectable } from '@angular/core';
import { Accessoire } from '../model/accessoire.model';
import { Couleur } from '../model/couleur.model';

@Injectable({
  providedIn: 'root',
})
export class AccessoireService {
  accessoires: Accessoire[]; //un tableau de accessoire
  accessoire!: Accessoire;
  couleurs: Couleur[];

  constructor() {
    this.couleurs = [
      { idCoul: 1, nomCoul: 'Argent' },
      { idCoul: 2, nomCoul: 'Doré' },
    ];

    this.accessoires = [
      {
        idaccessoire: 1,
        nomaccessoire: 'Collier',
        prixaccessoire: 50,
        dateCreation: new Date('05/07/2025'),
        couleur: { idCoul: 1, nomCoul: 'Argent' },
      },
      {
        idaccessoire: 2,
        nomaccessoire: 'Bague',
        prixaccessoire: 40,
        dateCreation: new Date('08/08/2024'),
        couleur: { idCoul: 2, nomCoul: 'Doré' },
      },
      {
        idaccessoire: 3,
        nomaccessoire: 'bracelet',
        prixaccessoire: 45,
        dateCreation: new Date('08/06/2025'),
        couleur: { idCoul: 1, nomCoul: 'Argent' },
      },
    ];
  }

  listeaccessoires(): Accessoire[] {
    return this.accessoires;
  }

  ajouteraccessoire(vete: Accessoire) {
    this.accessoires.push(vete);
  }

  supprimeraccessoire(vete: Accessoire) {
    const index = this.accessoires.indexOf(vete, 0);
    if (index > -1) {
      this.accessoires.splice(index, 1);
    }
  }

  consulteraccessoire(id: number): Accessoire {
    this.accessoire = this.accessoires.find((p) => p.idaccessoire == id)!;
    return this.accessoire;
  }

  trieraccessoires() {
    this.accessoires = this.accessoires.sort((n1, n2) => {
      if (n1.idaccessoire! > n2.idaccessoire!) {
        return 1;
      }
      if (n1.idaccessoire! < n2.idaccessoire!) {
        return -1;
      }
      return 0;
    });
  }

  updateaccessoire(v: Accessoire) {
    this.supprimeraccessoire(v);
    this.ajouteraccessoire(v);
    this.trieraccessoires();
  }

  listecouleurs(): Couleur[] {
    return this.couleurs;
  }

  consultercouleur(id: number): Couleur {
    return this.couleurs.find((cat) => cat.idCoul == id)!;
  }
  rechercherParcouleur(idCoul: number): Accessoire[] {
    return this.accessoires.filter(a => a.couleur.idCoul === idCoul);
  }
}
