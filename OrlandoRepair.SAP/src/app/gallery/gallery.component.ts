import { Component, OnInit } from '@angular/core';
import { images} from './../data/images';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: Array<any> = images;

  constructor() { }

  ngOnInit() {
  }

}
