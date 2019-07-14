import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {
 name:string;
 
  constructor() { }

  setName(name) {
    console.log("==",name);
    this.name = name;
  }

  getName() {
    return this.name;
  }

  updateName(name) {
    this.name = name;
  }

}
