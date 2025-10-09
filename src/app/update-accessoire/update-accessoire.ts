import { Component, OnInit } from '@angular/core';
import { AccessoireService } from '../service/accessoire';
import { ActivatedRoute, Router } from '@angular/router';
import { Accessoire } from '../model/accessoire.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-accessoire',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-accessoire.html',
  styles: ``
})
export class UpdateAccessoire implements OnInit {
  currentAccessoire!: Accessoire;

  constructor(
    private accessoireService: AccessoireService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.currentAccessoire = this.accessoireService.consulterAccessoire(
      this.activatedRoute.snapshot.params['id']
    );
  }

  updateAccessoire(): void {
    this.accessoireService.updateAccessoire(this.currentAccessoire);
    this.route.navigate(['accessoire']);
  }
}
