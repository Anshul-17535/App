import { Component, OnInit } from '@angular/core';
import {ShowService} from '../show.service';
import {Contact} from '../contact';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  providers: [ShowService]
})
export class ShowComponent implements OnInit {

  constructor(private showService:ShowService) { }
  contacts=Contact[10]=[];

  ngOnInit(): void {
    this.showService.getContacts()
      .subscribe((data:any)=>{
        this.contacts = data;
       
  })}

}
