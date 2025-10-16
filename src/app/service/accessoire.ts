import { Injectable } from '@angular/core';
import { accessoire } from '../model/accessoire.model';
import { couleur } from '../model/couleur.model';

@Injectable({
  providedIn: 'root',
})
export class accessoireService {
  accessoires:accessoire[]; //un tableau de accessoire
  accessoire!:accessoire;
  couleurs: couleur[];

  constructor() {
    this.couleurs = [
      { idCat: 1, nomCat: 'Argent' },
      { idCat: 2, nomCat: 'Doré' },
    ];

    this.accessoires = [
      {
        idaccessoire: 1,
        nomaccessoire: 'Collier',
        prixaccessoire: '50Dt',
        dateCreation: new Date('05/07/2025'),
        couleur: { idCat: 1, nomCat: 'Argent' },
      },
      {
        idaccessoire: 2,
        nomaccessoire: 'Bague',
        prixaccessoire: '40Dt',
        dateCreation: new Date('08/08/2024'),
        couleur: { idCat: 2, nomCat: 'Doré' },
      },
      {
        idaccessoire: 3,
        nomaccessoire: 'bracelet',
        prixaccessoire: '45Dt',
        dateCreation: new Date('08/06/2025'),
        couleur: { idCat: 1, nomCat: 'Argent' },
      },
    ];
  }

  listeaccessoires(): accessoire[] {
    return this.accessoires;
  }

  ajouteraccessoire(vete: accessoire) {
    this.accessoires.push(vete);
  }

  supprimeraccessoire(vete: accessoire) {
    //supprimer le accessoire vete du tableau accessoires
    const index = this.accessoires.indexOf(vete, 0);
    if (index > -1) {
      this.accessoires.splice(index, 1);
    }
    //ou Bien
    /*  this.accessoires.forEach((cur, index) => {
          if(vete.idaccessoire === cur.idaccessoire) {
                this.accessoires.splice(index, 1);
             }
       }); */
  }

  consulteraccessoire(id: number): accessoire {
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

  updateaccessoire(v:accessoire) {
    // console.log(p);
    this.supprimeraccessoire(v);
    this.ajouteraccessoire(v);
    this.trieraccessoires();
  }


  listecouleurs():couleur[] {
    return this.couleurs;
  }

consultercouleur(id:number): couleur{
        return this.couleurs.find(cat => cat.idCat  == id)!;
         }


}