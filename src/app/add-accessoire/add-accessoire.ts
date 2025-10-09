import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Accessoire } from '../model/accessoire.model';
import { AccessoireService } from '../service/accessoire';

@Component({
  selector: 'app-add-accessoire',
  imports: [FormsModule],
  templateUrl: './add-accessoire.html',
})
export class AddAccessoire implements OnInit {
  newAccessoire = new Accessoire();
  msg!: String;

  constructor(private accessoireService: AccessoireService) {}

  ngOnInit(): void {}

  addAccessoire(): void {
    this.accessoireService.addAccessoire(this.newAccessoire);
    this.msg = "Accessoire " + this.newAccessoire.nomAccessoire + " ajouté avec succès";
    alert(this.msg);
    this.newAccessoire = new Accessoire();
  }
}
