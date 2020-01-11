import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import { InstagramPostComponent } from './instagram-post/instagram-post.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { InstagramPostDetailsComponent } from './instagram-post-details/instagram-post-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InstagramPostComponent,
    InstagramPostDetailsComponent,
  ],
  imports: [
    HttpClientModule,
    MatInputModule,
    BrowserModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InstagramPostComponent, InstagramPostDetailsComponent]
})
export class AppModule { }
