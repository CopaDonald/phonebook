import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../services/model/contacts';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  displayedColumns: string[] = ['contact_name', 'contact_surname'];
  data: Contact[] = [];
  isLoadingResults = true;
  filterDataSource: any;


  constructor(private api: ContactsService) { }

  ngOnInit() {
    this.api.getContacts().subscribe(res => {
      this.data = res;
      this.filterDataSource = new MatTableDataSource(this.data)

      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  applyFilter(filterValue: string) {
    this.filterDataSource.filter = filterValue.trim().toLowerCase();
  }
}
