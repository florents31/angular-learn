import { Component } from '@angular/core';
import {TabService} from "./tab-component/tab.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public service: TabService){

  }
  title = 'forum';
}
