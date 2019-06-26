import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(public config: ConfigService) { }

  gallery = {};

  ngOnInit() {
    this.gallery = this.getContent();
  }
  
  getContent() {
    return this.config.getConfig().gallery;
  }
  
}
