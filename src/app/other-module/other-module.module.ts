import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { OtherModuleComponent } from './other.module.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';

const routes: Routes = [
    { path: 'other-module', component: ParentComponentComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,

    RouterModule.forChild(routes),
  ],
  declarations: [
    OtherModuleComponent,
    ParentComponentComponent,
    ChildComponentComponent
  ]
})
export class OtherModuleModule { }
