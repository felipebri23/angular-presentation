import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  RouterModule,
  Routes
} from '@angular/router';

import { OtherModuleModule} from './other-module/other-module.module';
import { OtherModuleComponent } from './other-module/other.module.component';
import { NestedRoutesModule, routes as childRoutes } from './nested-routes/nested-routes.module';

import { AppComponent } from './app.component';
import { InputHighlightDirective } from './directives/input-highlight.directive';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { HomeComponent } from './home/home.component';
import { ShowInputWithColorDirective } from './directives/show-input-with-color.directive';
import { LoggingService } from './services/logging.service';
import { AlertComponent } from './alert/alert.component';
import { DataBindingsComponent } from './data-bindings/data-bindings.component';
import { NestedRoutesComponent } from './nested-routes/nested-routes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'attribute-directives', component: AttributeDirectivesComponent },
  { path: 'structural-directives', component: StructuralDirectivesComponent },
  { path: 'alert', component: AlertComponent},
  { path: 'data-bindings', component: DataBindingsComponent},
  { path: 'nested-routes', component: NestedRoutesComponent, children: childRoutes}
];

@NgModule({
  declarations: [
    AppComponent,
    InputHighlightDirective,
    AttributeDirectivesComponent,
    StructuralDirectivesComponent,
    HomeComponent,
    ShowInputWithColorDirective,
    AlertComponent,
    DataBindingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    OtherModuleModule,
    NestedRoutesModule,

    RouterModule.forRoot(routes), // <-- routes
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
