import { Component, OnInit } from '@angular/core';

type Ingredient = {
  name:string,
  done:boolean
}

@Component({
  selector: 'app-recipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {

  ingredients:Ingredient[] = [
    {name:'flour', done:false},
    {name:'milk', done:false},
    {name:'eggs', done:false},
    {name:'sugar', done:false},
    {name:'salt', done:false},
    {name:'rum', done:false},
    {name:'butter', done:false}
      ];

  done=[]

  constructor() { }

  ngOnInit() {
  }

  erase(i:Ingredient){

    i.done = !i.done;
    //if (!this.done.includes(i)) {
      //this.done.push(i);
    //}
    //console.log(i, {done:this.done});
    //console.log(i, this.done);
  }

  isDone(i:Ingredient){
    //return this.done.includes(i);
    return i.done
  }

}
