import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  responsedata: any;

  constructor(private service: AuthService, private route: Router) {
    localStorage.clear();
  }
  Login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  ProceedLogin() {
    if (this.Login.valid) {
      this.service.proceedLogin(this.Login.value).subscribe((result) => {
        if (result != null) {
          this.responsedata = result;
          localStorage.setItem('access_token', this.responsedata.access_token);
          this.route.navigate(['/users']);
        }
      });
    }
  }
}
