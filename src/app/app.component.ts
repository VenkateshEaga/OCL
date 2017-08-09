import { DataService } from './cricket/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'OCL';
  constructor(private dataService: DataService){

  }
}
