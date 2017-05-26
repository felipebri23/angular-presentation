import { Component, OnInit } from '@angular/core';

import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private logger: LoggingService) { }

  ngOnInit() {
  }

  public showAlert(): void {
    this.logger.alert('Alert works!');
  }

}
