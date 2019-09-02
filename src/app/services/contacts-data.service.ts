import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from './model/contacts';


export class ContactData implements InMemoryDbService {
  createDb(){
    const contacts: Contact[]=[
      { id: 1, contact_name: 'Donald', contact_surname: 'Ngobeni', contact_number: "02323244444" },
      { id: 2, contact_name: 'Jabu', contact_surname: 'Mbava', contact_number: "07954255654" },
      { id: 3, contact_name: 'Slim', contact_surname: 'Ntsako', contact_number: "07954255654" }
    ];

    return { contacts };
  }
}