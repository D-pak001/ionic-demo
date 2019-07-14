import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NameService } from '../services/name.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  name:string ='Dev' ;
  info:string = 'Delhi,lajpat nagar'

  constructor(private router: Router,private nameService:NameService) { 
  }
  ngOnInit() {
    // this.name = this.nameService.getName();
}

  saveForm(){
   let name = this.name;
   console.log(name)
   this.nameService.updateName(name);
    // this.router.navigate(['tabs/tab1']);
  }

}
