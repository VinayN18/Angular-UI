import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageUserNotLoggedInComponent } from './home-page-user-not-logged-in/home-page-user-not-logged-in.component';
import { HomepageuserloggedinComponent } from './homepageuserloggedin/homepageuserloggedin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageUserNotLoggedInComponent,
    HomepageuserloggedinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
