import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactData } from './services/contacts-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const Declarations = [
  AppComponent,
  ContactsComponent,
  ContactDetailComponent,
  ContactAddComponent,
  ContactEditComponent
]

export const Imports = [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  InMemoryWebApiModule.forRoot(ContactData, {passThruUnknownUrl: true}),
  BrowserAnimationsModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
]

@NgModule({
  declarations: Declarations,
  imports: Imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

