import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  contactForm: FormGroup;
  id:number=null;
  contact_name:string='';
  contact_surname:string='';
  contact_number:number=null;
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ContactsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  public initForm() {
        this.getContact(this.route.snapshot.params['id']);
        this.contactForm = this.formBuilder.group({
        'contact_name' : [null, Validators.required],
        'contact_surname' : [null, Validators.required],
        'contact_number' : [null, Validators.required]
    });
  }

  getContact(id) {
    this.api.getContact(id).subscribe(data => {
      this.id = data.id;
      this.contactForm.setValue({
        contact_name: data.contact_name,
        contact_surname: data.contact_surname,
        contact_number: data.contact_number,
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    
    this.api.updateContact(this.id, form).subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/contact-details', this.id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  showContactDetails() {
    this.router.navigate(['/contact-details', this.id]);
  }

}
