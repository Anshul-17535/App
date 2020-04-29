import { Component, OnInit } from '@angular/core';
import {AddService} from '../add.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [AddService]
})
export class ADDComponent implements OnInit {

  constructor(private addService:AddService) { }
  contacts=Contact[10]=[];
  contact:Contact;
  first_name:string;
  last_name:string;
  phone:string;

  addContact()
  {
    const newc={
      first_name:this.first_name,
      last_name:this.last_name,
      phone:this.phone,
    }
    this.addService.addContacts(newc).subscribe(
      contact=>{
        this.contacts.push(contact);//for array
        this.addService.getContacts()
      .subscribe((data:any)=>{
        this.contacts = data;
    });
      }
    ) 
  }




  ngOnInit(): void {
    this.addService.getContacts()
      .subscribe((data:any)=>{
        this.contacts = data;
    });
  }
  

}
