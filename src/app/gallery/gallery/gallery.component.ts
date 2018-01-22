import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit {
  i = 0;

  images = [
    'http://www.brand-garden.com/garden/wp-content/uploads/2016/12/unique-picture-landscape-perfect-2048-landscape.jpg',
    'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg',
    'https://pymex.com/wp-content/uploads/2017/04/paises-Europa.jpg'
  ];

  constructor(public dialogRef: MatDialogRef<GalleryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}




