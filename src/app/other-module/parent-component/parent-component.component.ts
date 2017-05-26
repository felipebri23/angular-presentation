import { Component, OnInit } from '@angular/core';

import { LoggingService } from '../../services/logging.service'

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  public name: string;
  public surname1: string;
  public surname2: string;

  constructor(private logger: LoggingService) { }

  ngOnInit() {
  }

  public validName(valid: boolean): void {
    this.logger.alert(`the name is ${valid ? 'valid' : 'invalid'}!`);
  }

  public validSurname1(valid: boolean): void {
    this.logger.alert(`the surname 1 is ${valid ? 'valid' : 'invalid'}!`);
  }

  public validSurname2(valid: boolean): void {
    this.logger.alert(`the surname 2 is ${valid ? 'valid' : 'invalid'}!`);
  }

}
