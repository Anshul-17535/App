import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';
import {Contact} from '../contact';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {

  constructor(private contactService: ContactsService) { }

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
    this.contactService.addContacts(newc).subscribe(
      contact=>{
        this.contacts.push(contact);//for array
        this.contactService.getContacts()
      .subscribe((data:any)=>{
        this.contacts = data;
        console.log('before component ' + JSON.stringify(this.contacts[2]))
    });
      }
    ) 
  }

  deleteContact(id:any){

    var contacts=this.contacts
    this.contactService.deleteContact(id).subscribe(data=>{
      for( var i=0;i<contacts.length;i++)
      {
      
        if(this.contacts[i]._id==id)
        {
          contacts.splice(i,1)//for array
        }
      }
    })

  }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe((data:any)=>{
        this.contacts = data;
        console.log('before component ' + JSON.stringify(this.contacts[2]))
    });
  }


}
