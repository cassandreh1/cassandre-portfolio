import { Component, OnInit } from '@angular/core';
import { ContactMeInfo } from '../contact-me-info';
import { NgModel } from '@angular/forms';

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

  onSubmit(form: NgModel) { 
    console.log(this.model);
    if (!form.valid){
      // TODO: trigger From Control errors, will need to use Reactive forms
      return false;
    }
    // TODO: rest call to Nodemailer module
    this.submitted = true;
    this.model.reset();
    form.reset();

  }
}
