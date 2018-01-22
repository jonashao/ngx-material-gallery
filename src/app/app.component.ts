import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {GalleryComponent} from './gallery/gallery/gallery.component';
import {GalleryService} from './gallery/gallery/gallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog) {
  }

  openGallery() {
    this.dialog.open(TestDialogComponent, {data: {position: 1}});
  }
}

@Component({
  template: '<button mat-button (click)="openGallery()">OPEN</button>\n'
})
export class TestDialogComponent {
  constructor(private gallery: GalleryService) {
  }

  openGallery() {
    this.gallery.openGallery();
  }
}
