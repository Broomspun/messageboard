import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/auth.service';
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  profileForm: FormGroup;
  user: any;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.auth.getUser()
      .subscribe( (res) => {
        this.user = res;
        this.profileForm.setValue({
          firstname: res.firstname,
          lastname: res.lastname
        });
      });
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.profileForm = this.fb.group({
      firstname: '',
      lastname:  '',
    });
  }

  onSubmit() {
    this.user.firstname = this.profileForm.value['firstname'];
    this.user.lastname = this.profileForm.value['lastname'];
    this.auth.updateUser(this.profileForm.value)
      .subscribe( (res) => {
        localStorage.setItem('name', res);
        this.router.navigate(['/']);
      });
  }
}
