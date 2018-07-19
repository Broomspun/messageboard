import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WebService} from '../../shared/web.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {
  newMessageForm: FormGroup;
  constructor(private webservice: WebService) { }

  ngOnInit() {
    this.newMessageForm = new FormGroup(
      {
        'owner': new FormControl(null, Validators.required),
        'text': new FormControl(null, Validators.required)
      }
    );
  }
  onSubmit() {
    // let newMessage = {}
    this.webservice.saveMessage(this.newMessageForm.value)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(`Error occured: ${JSON.stringify(err)}`);
        }
      );

    // this.newMessageForm.reset();
  }



}
