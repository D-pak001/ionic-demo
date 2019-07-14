import { Component } from '@angular/core';
import { NameService } from '../services/name.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
name:string;
  constructor(private nameService:NameService) {}
ngOnInit() {
   let name = this.nameService.getName();
   if(name == null) {
     this.name = 'Bob';
   } else {
     this.name = name;
   }
}

saveForm(){
 let name = this.name;
 this.nameService.setName(name);
}

}
