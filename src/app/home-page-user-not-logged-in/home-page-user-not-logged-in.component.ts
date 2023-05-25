import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-user-not-logged-in',
  templateUrl: './home-page-user-not-logged-in.component.html',
  styleUrls: ['./home-page-user-not-logged-in.component.css'],
})
export class HomePageUserNotLoggedInComponent implements OnInit {
  displaySignUpPage = 'none';
  displayLoginPage = 'none';
  displayStyle = 'none';
  hide1 = true;
  hide2 = true;
  grp = 'Join Group';
  cls = 'box-leave';
  allPostText = 'All Posts(32)';
  postText = 'Write a Post';
  share = '';
  share2 = '';
  share3 = '';
  share4 = '';
  signInTerms = '';
  welcomeText = 'Sign In';

  ngOnInit() {
    this.updateParagraphText();
  }

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

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.updateParagraphText();
  }

  updateParagraphText() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 700) {
      this.postText = 'Filter: All';
      this.share = 'Share';
      this.share2 = 'Share';
      this.share3 = 'Share';
      this.share4 = 'Share';
      this.allPostText = 'Posts(368)';
      this.signInTerms =
        'By signing up, you agree to our Terms & conditions, Privacy policy';
      this.welcomeText = 'Welcome back!';
    } else {
      this.postText = 'Write a Post';
      this.share = '';
      this.share2 = '';
      this.share3 = '';
      this.share4 = '';
      this.allPostText = 'All Posts(32)';
      this.signInTerms = '';
      this.welcomeText = 'Sign In';
    }
  }
}
