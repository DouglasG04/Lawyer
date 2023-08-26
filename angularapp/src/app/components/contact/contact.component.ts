import { Component } from '@angular/core';
import { Contact } from 'src/app/interfaces/lawyer.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactData: Contact;

  constructor(private contactDataService: ContactService) {
    this.contactData = this.contactDataService.FormContact;
  }


  showData(){
    console.log(this.contactData);
  }
}
