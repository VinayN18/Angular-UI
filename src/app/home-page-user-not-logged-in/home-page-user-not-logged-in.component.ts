import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page-user-not-logged-in',
  templateUrl: './home-page-user-not-logged-in.component.html',
  styleUrls: ['./home-page-user-not-logged-in.component.css'],
})
export class HomePageUserNotLoggedInComponent {
  displaySignUpPage = 'none';
  displayLoginPage = 'none';
  displayStyle = 'none';
  hide1 = true;
  hide2 = true;
  grp = 'Join Group';
  cls = 'box-leave';

  onLoginPage() {
    if (this.grp === 'Join Group') {
      this.displayLoginPage = 'none';
      this.displaySignUpPage = 'block';
    } else {
      this.grp = 'Join Group';
    }
  }
  onSignUp() {
    this.displaySignUpPage = 'none';
    this.displayLoginPage = 'block';
  }
  onExit() {
    this.displaySignUpPage = 'none';
    this.displayLoginPage = 'none';
  }

  onSubmitSignUp() {}
  onSubmitLogIn() {}

  onJoinGrp() {
    this.grp = 'Leave Group';
    this.displaySignUpPage = 'none';
    this.displayLoginPage = 'none';
  }
}
