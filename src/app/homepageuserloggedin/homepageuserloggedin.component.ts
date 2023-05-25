import { Component } from '@angular/core';

@Component({
  selector: 'app-homepageuserloggedin',
  templateUrl: './homepageuserloggedin.component.html',
  styleUrls: [
    './homepageuserloggedin.component.css',
    '../home-page-user-not-logged-in/combined-styles.css',
  ],
})
export class HomepageuserloggedinComponent {
  isHighlighted1 = false;
  follow1 = 'Follow';
  isHighlighted2 = false;
  follow2 = 'Follow';
  isHighlighted3 = false;
  follow3 = 'Follow';
  isHighlighted4 = false;
  follow4 = 'Follow';

  toggleHighlight1() {
    this.isHighlighted1 = !this.isHighlighted1;
    if (this.isHighlighted1) {
      this.follow1 = 'Followed';
    } else {
      this.follow1 = 'Follow';
    }
  }

  toggleHighlight2() {
    this.isHighlighted2 = !this.isHighlighted2;
    if (this.isHighlighted2) {
      this.follow2 = 'Followed';
    } else {
      this.follow2 = 'Follow';
    }
  }

  toggleHighlight3() {
    this.isHighlighted3 = !this.isHighlighted3;
    if (this.isHighlighted3) {
      this.follow3 = 'Followed';
    } else {
      this.follow3 = 'Follow';
    }
  }

  toggleHighlight4() {
    this.isHighlighted4 = !this.isHighlighted4;
    if (this.isHighlighted4) {
      this.follow4 = 'Followed';
    } else {
      this.follow4 = 'Follow';
    }
  }
}
