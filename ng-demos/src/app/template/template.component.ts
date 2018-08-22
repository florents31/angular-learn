import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {




  users = ['Jack', 'John', 'Jim', 'Jane']
  constructor() { }

  getName(){
    return "Florent"
  }

  getContent(){
    return "No quotes needed"
  }

  condition(){
    return this.users.length > 2


  }

  getImpressiveStyle(){
    return 'impressive';
  }

  noop(){

  }

  clearUsers(){
    this.users = [];
  }

  ngOnInit() {
  }

}
