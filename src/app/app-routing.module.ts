import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageUserNotLoggedInComponent } from './home-page-user-not-logged-in/home-page-user-not-logged-in.component';
import { HomepageuserloggedinComponent } from './homepageuserloggedin/homepageuserloggedin.component';

const routes: Routes = [
  { path: '', component: HomePageUserNotLoggedInComponent },
  { path: 'userloggedin', component: HomepageuserloggedinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
