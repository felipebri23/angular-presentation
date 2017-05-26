import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

import { NestedRoutesComponent } from './nested-routes.component';
import { MainComponent } from './main/main.component';
import { ColorsComponent } from './colors/colors.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: ':color/:hex', component: ColorsComponent }
];

@NgModule({
    declarations: [
        NestedRoutesComponent,
        MainComponent,
        ColorsComponent
    ],
    exports: [
        NestedRoutesComponent,
        MainComponent,
        ColorsComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
})
export class NestedRoutesModule { }
