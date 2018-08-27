import { Component, OnInit } from '@angular/core';
import {TabService} from "./tab.service";

@Component({
  selector: 'app-tab-component',
  templateUrl: './tab-component.component.html',
  styleUrls: ['./tab-component.component.css']
})
export class TabComponentComponent implements OnInit {
current:any;
  constructor(public service: TabService) { }

  ngOnInit() {
  }

  userClick(){
    this.current = this.service.tab('users')
  }

  topicClick(){
    this.current = this.service.tab('topics')
  }
}
