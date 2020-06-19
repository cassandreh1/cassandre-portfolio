import { Component, OnInit } from '@angular/core';
import { ContactMeInfo } from '../contact-me-info';
import { NgModel } from '@angular/forms';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

// @Injectable()
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  model = new ContactMeInfo('', '', '', '');
  submitted = false;

  onSubmit() { 
    // console.log(this.model);
    // if (!form.valid){
    //   // TODO: trigger From Control errors, will need to use Reactive forms
    //   return false;
    // }
    // // TODO: rest call to Nodemailer module
    // this.submitted = true;
    // this.model.reset();
    // form.reset();
      const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', this.model.firstName)
      .append('email', this.model.lastName)
      .append('art', this.model.email)
      .append('message', this.model.message)
      this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
        res => {},
        err => {
          if (err instanceof ErrorEvent) {
            //client side error
            alert("Something went wrong when sending your message.");
            console.log(err.error.message);
          } else {
            //backend error. If status is 200, then the message successfully sent
            if (err.status === 200) {
              alert("Your message has been sent!");
            } else {
              alert("Something went wrong when sending your message.");
              console.log('Error status:');
              console.log(err.status);
              console.log('Error body:');
              console.log(err.error);
            };
          };
        }
      );
  }
}
