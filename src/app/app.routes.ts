import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AddProduit } from './add-produit/add-produit';
import { ProduitComponent } from './produit/produit';
import { UpdateProduit } from './update-produit/update-produit';

export const routes: Routes = [
    {path:"produit",component:ProduitComponent},
    {path:"add-produit",component:AddProduit},
    {path:"update-produit/:id",component:UpdateProduit},
    {path:"",redirectTo:"produit",pathMatch:"full"}
];
