import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NjHeaderComponent } from './nirjai-web/nj-header/nj-header.component';
import { NjFooterComponent } from './nirjai-web/nj-footer/nj-footer.component';
import { NjHomeComponent } from './nirjai-web/nj-home/nj-home.component';
import { MatIconModule } from "@angular/material/icon";
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
import { NjItTraningComponent } from './nirjai-web/nj-home/nj-it-traning/nj-it-traning.component';

@NgModule({
  declarations: [
    AppComponent,
    NjHeaderComponent,
    NjFooterComponent,
    NjHomeComponent,
    NjItTraningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
