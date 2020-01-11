import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramPostDetailsComponent } from './instagram-post-details.component';

describe('InstagramPostDetailsComponent', () => {
  let component: InstagramPostDetailsComponent;
  let fixture: ComponentFixture<InstagramPostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramPostDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
