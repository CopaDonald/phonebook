import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Declarations, Imports } from '../app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactAddComponent } from './contact-add.component';

describe('ContactAddComponent', () => {
  let component: ContactAddComponent;
  let fixture: ComponentFixture<ContactAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: Declarations,
      imports: [...Imports, RouterTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add contact detail', () => {
    expect(component).toBeTruthy();
  });
});
