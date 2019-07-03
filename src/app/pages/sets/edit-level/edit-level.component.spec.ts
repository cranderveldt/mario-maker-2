import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEditLevelComponent } from './edit-level.component';

describe('SetEditLevelComponent', () => {
  let component: SetEditLevelComponent;
  let fixture: ComponentFixture<SetEditLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetEditLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetEditLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
