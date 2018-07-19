import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/auth.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  EMAIL_REGEX = `^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$`;
  constructor(private fb: FormBuilder, private auth: AuthService,
              private router: Router,
              private sb: MatSnackBar) { }
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.pattern(this.EMAIL_REGEX)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      }
    );
  }

  onSubmit() {
    this.auth.loginUser(this.loginForm.value)
      .subscribe((res) => {
        if (res.status) {
          localStorage.setItem('mytoken', res.token);
          localStorage.setItem('name', res.firstname);
          this.router.navigate(['/']);
        } else {
          this.sb.open(`${JSON.stringify(res.message)}`, 'close', {duration: 3000});
        }
      });
  }

}
