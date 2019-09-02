import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../services/model/contacts';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contacts: Contact = { id: null, contact_name: '', contact_surname: '', contact_number: '' };
  isLoadingResults = true;
  public contactId : number;

  constructor(private route: ActivatedRoute, private api: ContactsService, private router: Router) { }

  ngOnInit() {
    this.getContactDetails(this.route.snapshot.params['id']);

  }

  getContactDetails(id: number) {
    this.api.getContact(id).subscribe(data => {
        this.contacts = data;
        this.contactId = this.contacts.id;
        this.isLoadingResults = false;
      });
  }

  deleteContact(id) {
    this.isLoadingResults = true;
    this.api.deleteContact(id).subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/contacts']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
