import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PasswordValidation} from '../../shared/password-validation';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  EMAIL_REGEX = `^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$`;
  constructor(private fb: FormBuilder, private auth: AuthService,
              private router: Router) { }
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
        firstname: ['', Validators.required],
        lastname: '',
        email: ['', [Validators.required, Validators.pattern(this.EMAIL_REGEX)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password1: ['', Validators.required],
      }, {
      validator: PasswordValidation.MatchPassword
      }
    );
  }

  onSubmit() {
    this.auth.registerUser(this.registerForm.value)
      .subscribe((res) => {
        console.log(res);
        localStorage.setItem('mytoken', res.token);
        localStorage.setItem('name', res.firstname);
        this.router.navigate(['/']);

      });
  }

  onCancel($event) {
    $event.preventDefault();
    this.registerForm.reset();
  }
}
