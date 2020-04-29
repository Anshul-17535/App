import { Component, OnInit } from '@angular/core';
import {DeleteService} from '../delete.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private deleteService:DeleteService) { }
  contacts=Contact[10]=[];
  ngOnInit() {
    this.deleteService.getContacts()
      .subscribe((data:any)=>{
        this.contacts = data;
       
    });
  }
  deleteContact(id:any){

    var contacts=this.contacts
    this.deleteService.deleteContact(id).subscribe(data=>{
      for( var i=0;i<contacts.length;i++)
      {
      
        if(this.contacts[i]._id==id)
        {
          contacts.splice(i,1)//for array
        }
      }
    })

  }


}
