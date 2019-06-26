import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private config : ConfigService) { }

  content = {};

  getContent() {
    return this.config.getConfig().content;
  }
  ngOnInit() {
    this.content = this.getContent();
  }
}
  
  


