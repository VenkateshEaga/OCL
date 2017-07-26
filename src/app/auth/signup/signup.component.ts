import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLinkSent = false;
  constructor() { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm)
  {
      //get a unique signup link and send it to user
      this.isLinkSent = true;
  }
  
}
