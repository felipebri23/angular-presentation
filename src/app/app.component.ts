import { Component } from '@angular/core';

import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private logger: LoggingService) {
    this.logger.info('app works!');
  }
}
