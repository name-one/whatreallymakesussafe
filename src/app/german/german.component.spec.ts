import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanComponent } from './german.component';

describe('GermanComponent', () => {
  let component: GermanComponent;
  let fixture: ComponentFixture<GermanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GermanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
