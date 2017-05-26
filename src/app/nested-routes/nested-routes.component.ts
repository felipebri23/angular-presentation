import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

@Component({
  selector: 'app-nested-routes',
  templateUrl: './nested-routes.component.html',
  styleUrls: ['./nested-routes.component.css']
})
export class NestedRoutesComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  public selectColor(color: string, hex: string): void {
    this.router.navigate(['./', color, hex], {relativeTo: this.route});
  }

}
