import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  choice = 'users';

  constructor() { }

  tab(choice){
    this.choice = choice;
  }
}
