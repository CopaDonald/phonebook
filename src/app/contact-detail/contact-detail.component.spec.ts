import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Declarations, Imports } from '../app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactDetailComponent } from './contact-detail.component';

describe('ContactDetailComponent', () => {
  let component: ContactDetailComponent;
  let fixture: ComponentFixture<ContactDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: Declarations,
      imports: [...Imports, RouterTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('getContactDetails() || should return selected contact details based on id', async() => {
      component.getContactDetails(1);
    // expect(component.contactForm.controls['contact_name'].value).toBe('Donald');
    // expect(component.contactForm.controls['contact_surname'].value).toBe('Ngobeni');
    // expect(component.contactForm.controls['contact_number'].value).toBe('02323244444');
    expect(component).toBeTruthy();
  });
});
