import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }

  public info(message: string): void {
    console.log(message);
  }

  public alert(message: string): void {
    alert(message);
  }

}
