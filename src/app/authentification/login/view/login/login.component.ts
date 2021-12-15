import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentification/services/auth.service';

interface IUser {
  email: string;
  password: string;
}
@Component({
  selector: 'view-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  user: IUser = { email: '', password: '' };
  constructor(private as: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.as.logIn(this.user.email, this.user.password).subscribe((result: any) => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }
}
