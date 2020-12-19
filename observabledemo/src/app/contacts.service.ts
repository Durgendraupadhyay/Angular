import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  //HTTP Call
  getContacts(){

    const contactList = [
      {id:1,name:'sejal'},
      {id:2,name:'poornima'},
      {id:3,name:'siddhi'}
    ];

    return contactList;
  }



  constructor() { }
}
