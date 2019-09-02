import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactEditComponent } from './contact-edit.component';
import { Declarations, Imports } from '../app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactsService } from '../services/contacts.service';

describe('ContactEditComponent', () => {
  let component: ContactEditComponent;
  let fixture: ComponentFixture<ContactEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: Declarations,
      imports: [...Imports, RouterTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async() => {
    expect(component).toBeTruthy();
  });

  it('should return an invalid if component is not validated', async() => {
    expect(component.contactForm.valid).toBe(false);
  });

  // it('getContact() || should return selected contact details based on id', async() => {
  //   component.getContact(1);
  //   expect(component.contactForm.controls['contact_name'].value).toBe('Donald');
  //   expect(component.contactForm.controls['contact_surname'].value).toBe('Ngobeni');
  //   expect(component.contactForm.controls['contact_number'].value).toBe('02323244444');
  //   expect(component.contactForm.valid).toBe(true);
  // });

  it('should return a valid if component is validated', async() => {
    component.contactForm.controls['contact_name'].setValue('TEST');
    component.contactForm.controls['contact_surname'].setValue('TEST');
    component.contactForm.controls['contact_number'].setValue('TEST');
    expect(component.contactForm.valid).toBe(true);
  });

  
});
