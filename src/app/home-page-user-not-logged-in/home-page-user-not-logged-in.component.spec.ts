import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageUserNotLoggedInComponent } from './home-page-user-not-logged-in.component';

describe('HomePageUserNotLoggedInComponent', () => {
  let component: HomePageUserNotLoggedInComponent;
  let fixture: ComponentFixture<HomePageUserNotLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageUserNotLoggedInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageUserNotLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
