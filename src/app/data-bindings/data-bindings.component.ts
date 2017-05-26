import { Component, OnInit } from '@angular/core';

import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-data-bindings',
  templateUrl: './data-bindings.component.html',
  styleUrls: ['./data-bindings.component.css']
})
export class DataBindingsComponent implements OnInit {

  public name: string;
  public company: string;
  public color: string;

  constructor(private logger: LoggingService) { }

  ngOnInit() {
    this.company = 'Analytic always';
    this.color = 'yellow';
  }

  public clickButton(): void {
    this.logger.alert('button clicked!');
  }

}
