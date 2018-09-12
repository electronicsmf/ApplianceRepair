import { Component, OnInit } from '@angular/core';
import { ImagesService } from './../_services/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: Array<any>;
  error: string;

  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
      this.imagesService.getAllImages()
          .subscribe(
               data => this.images = data,
               error => this.error = error.statusText
          );
  }

}
