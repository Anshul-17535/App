import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Contact} from './contact';
import {Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ContactsService {

  constructor(private http:HttpClient) {}
    //retrieving contacts
    getContacts():Observable<Contact[]>{

      return this.http.get<Contact[]>('http://localhost:3000/api/contacts').pipe(map(res => res));

      
    
      }

    
    addContacts(newContact){

      var headers = new HttpHeaders();
      headers.append('Content-Type','application/json');
      return this.http.post<Contact[]>('http://localhost:3000/api/contact',newContact,{headers:headers})
      .pipe(map(res=>res))

    }

    // //delete method
    deleteContact(id){

      return this.http.delete<Contact[]>('http://localhost:3000/api/contact/'+id).pipe(map(res => res));
    }
  

   }

