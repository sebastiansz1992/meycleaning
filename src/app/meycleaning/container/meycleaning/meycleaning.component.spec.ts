import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeycleaningComponent } from './meycleaning.component';

describe('MeycleaningComponent', () => {
  let component: MeycleaningComponent;
  let fixture: ComponentFixture<MeycleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeycleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeycleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
