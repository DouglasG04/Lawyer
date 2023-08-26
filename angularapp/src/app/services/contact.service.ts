import { Injectable } from '@angular/core';
import { Contact, Degrees } from '../interfaces/lawyer.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  FormContact: Contact = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }


}
