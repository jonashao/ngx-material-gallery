import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {GalleryModule} from './gallery/gallery.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GalleryComponent} from './gallery/gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatDialogModule, GalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
