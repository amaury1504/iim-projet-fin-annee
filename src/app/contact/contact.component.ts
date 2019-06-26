import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private config: ConfigService) { }
  contact = {};
  getContact() {
    return this.config.getConfig().contact;
  }
  ngOnInit() {
    this.contact = this.getContact();
  }

}
