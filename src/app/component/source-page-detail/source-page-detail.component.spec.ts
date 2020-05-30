import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcePageDetailComponent } from './source-page-detail.component';

describe('SourcePageDetailComponent', () => {
  let component: SourcePageDetailComponent;
  let fixture: ComponentFixture<SourcePageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcePageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcePageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
