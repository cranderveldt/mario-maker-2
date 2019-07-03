import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetShowComponent } from './show.component';

describe('SetShowComponent', () => {
  let component: SetShowComponent;
  let fixture: ComponentFixture<SetShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
