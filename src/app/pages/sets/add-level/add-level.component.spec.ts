import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAddLevelComponent } from './add-level.component';

describe('SetAddLevelComponent', () => {
  let component: SetAddLevelComponent;
  let fixture: ComponentFixture<SetAddLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAddLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAddLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
