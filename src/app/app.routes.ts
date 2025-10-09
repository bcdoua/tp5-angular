import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AddAccessoire } from './add-accessoire/add-accessoire';
import { AccessoireComponent } from './accessoire/accessoire';
import { UpdateAccessoire } from './update-accessoire/update-accessoire';

export const routes: Routes = [
    { path: "accessoire", component: AccessoireComponent },
    { path: "add-accessoire", component: AddAccessoire },
    { path: "update-accessoire/:id", component: UpdateAccessoire },
    { path: "", redirectTo: "accessoire", pathMatch: "full" }
];
