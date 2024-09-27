import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NjHeaderComponent } from './nirjai-web/nj-header/nj-header.component';
import { NjFooterComponent } from './nirjai-web/nj-footer/nj-footer.component';
import { NjHomeComponent } from './nirjai-web/nj-home/nj-home.component';
import { MatIconModule } from "@angular/material/icon";
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    NjHeaderComponent,
    NjFooterComponent,
    NjHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
    MatTabsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
