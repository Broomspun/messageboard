import { Component, OnInit } from '@angular/core';
import {WebService} from '../../shared/web.service';
import {Message} from '../../message';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Params} from '@angular/router';
import {AuthService} from '../../shared/auth.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: Message[];

  constructor(private webservice: WebService,
              private sb: MatSnackBar,
              private auth: AuthService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const username = this.route.snapshot.params.user;
    this.webservice.messageChanged
      .subscribe(
        (message: Message) => {
          this.messages.push(message);
          this.sb.open(`Created New Message: ${JSON.stringify(message)}`, 'close', {duration: 3000});
        }
      );

    this.webservice.getMessages(username)
      .subscribe(
        (res) => {
          this.messages = res;
          console.log(`${JSON.stringify(res)}`);
        }
      );
  }

}
