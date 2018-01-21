import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from './gallery/gallery.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {TestDialogComponent} from '../app.component';

@NgModule({
  imports: [
    CommonModule, MatIconModule, MatButtonModule
  ],
  entryComponents: [GalleryComponent, TestDialogComponent],
  declarations: [GalleryComponent, TestDialogComponent],
  exports: [GalleryComponent]
})
export class GalleryModule {

}
