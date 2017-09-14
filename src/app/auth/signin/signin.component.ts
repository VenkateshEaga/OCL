import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router, private route :ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm)
  {
    this.authService.islogin(form.value.username,form.value.password);
    this.router.navigate(['/auction'],{relativeTo:this.route});
  }
}
