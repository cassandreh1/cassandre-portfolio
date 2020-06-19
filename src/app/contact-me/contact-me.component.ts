import { Component, OnInit } from '@angular/core';
import { ContactMeInfo } from '../contact-me-info';
import { NgModel } from '@angular/forms';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  model = new ContactMeInfo('', '', '', '');
  showErrMsg: Boolean = false;
  showSuccessMsg: Boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  closeAlert(action) {
    if (action === 'success') {
      this.showSuccessMsg = false;
    } else {
      this.showErrMsg = false;
    }
  }
  onSubmit(form: NgModel) { 
    // TODO: trigger From Control errors, will need to use Reactive forms
    if (!form.valid){
      alert("Please fill out the form");
      return false;
    }
      const body = new HttpParams()
      .set('form-name', 'contact')
      .append('firstName', this.model.firstName)
      .append('lastName', this.model.lastName)
      .append('email', this.model.email)
      .append('message', this.model.message)
      this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
        res => {},
        err => {
          if (err instanceof ErrorEvent) {
            //client side error
            this.model.reset();
            form.reset();
            this.showErrMsg = true;
            console.log(err.error.message);
          } else {
            //backend error. If status is 200, then the message successfully sent
            if (err.status === 200) {
              this.model.reset();
              form.reset();
              this.showSuccessMsg = true;
            } else {
              this.model.reset();
              form.reset();
              this.showErrMsg = true;
              console.log('Error status:', err.status);
              console.log('Error body:', err.error);
            };
          };
        }
      );
  }
}
