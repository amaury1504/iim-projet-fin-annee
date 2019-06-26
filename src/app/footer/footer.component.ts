import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private config: ConfigService) { }

  footer = {};

  getFooter() {
    return this.config.getConfig().footer;
  }
  ngOnInit() {
    this.footer = this.getFooter();
  }

}
