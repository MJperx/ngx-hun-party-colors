import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HUNPartyColorsModule } from '../../projects/ngx-hun-party-colors/src/lib/hun-party-colors.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HUNPartyColorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
