import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Contact} from './contact';
import {Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) {}

  deleteContact(id){

    return this.http.delete<Contact[]>('http://localhost:3000/api/contact/'+id).pipe(map(res => res));
  }

  getContacts():Observable<Contact[]>{

    return this.http.get<Contact[]>('http://localhost:3000/api/contacts').pipe(map(res => res));

    
  
    }



 

}
