import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-registration', 
  templateUrl: './registration.component.html', 
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  username: string; 
  password_1: string; 
  password_2: string; 
  error: string; 

  constructor() {}

  ngOnInit() {

  }

  submitForm() {
    if (this.username && this.password_1 === this.password_2 ) {
      // submit form to auth service 
    }

  
  }
}