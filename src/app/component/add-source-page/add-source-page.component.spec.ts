import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSourcePageComponent } from './add-source-page.component';

describe('AddSourcePageComponent', () => {
  let component: AddSourcePageComponent;
  let fixture: ComponentFixture<AddSourcePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSourcePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSourcePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
