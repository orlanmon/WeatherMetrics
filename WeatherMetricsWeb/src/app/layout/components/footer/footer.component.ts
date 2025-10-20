import { Component } from '@angular/core';
import { DatePipe} from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  imports : [DatePipe]
})
export class FooterComponent {

    currentDate: Date;

    constructor() {
  
      this.currentDate = new Date();  

  }
}

