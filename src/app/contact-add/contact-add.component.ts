import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {

  contactForm: FormGroup;
  contact_name:string='';
  contact_surname:string='';
  contact_number:number=null;
  isLoadingResults = false;

  constructor(private router: Router, private api: ContactsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      'contact_name' : [null, Validators.required],
      'contact_surname' : [null, Validators.required],
      'contact_number' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;

    this.api.addContact(form).subscribe(res => {
      let id = res['id'];
      this.isLoadingResults = false;
      this.router.navigate(['/contact-details', id]);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
