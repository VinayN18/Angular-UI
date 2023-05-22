import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageuserloggedinComponent } from './homepageuserloggedin.component';

describe('HomepageuserloggedinComponent', () => {
  let component: HomepageuserloggedinComponent;
  let fixture: ComponentFixture<HomepageuserloggedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageuserloggedinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageuserloggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
