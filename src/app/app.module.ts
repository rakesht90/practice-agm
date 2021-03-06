import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCAwsVPbcZHHPQPul3giA9QpMdi2KvPKd8s'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
