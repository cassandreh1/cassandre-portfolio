import { Component, OnInit } from '@angular/core';
import { ContactMeInfo } from '../contact-me-info';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  model = new ContactMeInfo('', '', '', '');
  submitted = false;

  onSubmit() { 
    this.submitted = true; 
  }
  // TODO: Remove this when we're done
  get diagnostic() { 
    return JSON.stringify(this.model); 
  }

}
