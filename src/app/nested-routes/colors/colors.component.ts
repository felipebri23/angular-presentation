import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent {

  public color: string;
  public hex: string;

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => { this.color = params['color']; });
    route.params.subscribe(params => { this.hex = params['hex']; });
  }
}
