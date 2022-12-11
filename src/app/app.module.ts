import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChrisComponent } from './pages/chris/chris.component';
import { LaurentComponent } from './pages/laurent/laurent.component';
import { CvComponent } from './shared/cv/cv.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NgxVcardModule } from "ngx-vcard";
import { HttpClientModule } from '@angular/common/http';
import { AllComponent } from './pages/all/all.component';


@NgModule({
  declarations: [
    AppComponent,
    ChrisComponent,
    LaurentComponent,
    CvComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    NgxVcardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
