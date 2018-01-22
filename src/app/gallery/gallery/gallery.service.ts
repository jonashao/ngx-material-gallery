import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {GalleryComponent} from './gallery.component';

@Injectable()
export class GalleryService {

  constructor(private dialog: MatDialog) {
  }

  openGallery() {
    this.dialog.open(GalleryComponent, {data: {position: 1}, panelClass: 'gallery-dialog'});
  }

}
