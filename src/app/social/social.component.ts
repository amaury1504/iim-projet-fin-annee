import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor(private config: ConfigService) { }

  socialsites = {};

  getSocialsites(){
    return  this.config.getConfig().socialsites;
  }

  ngOnInit() {
    this.socialsites = this.getSocialsites();
  }

}
