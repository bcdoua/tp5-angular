import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AddaccessoireComponent } from './add-accessoire/add-accessoire';
import { accessoireComponent } from './accessoires/accessoire';
import { Updateaccessoire} from './update-accessoire/update-accessoire';

export const routes: Routes = [
    {path:"accessoire",component:accessoireComponent},
    {path:"add-accessoire",component:AddaccessoireComponent},
    {path:"update-accessoire/:id",component:Updateaccessoire},
    {path:"",redirectTo:"accessoire",pathMatch:"full"}
];
