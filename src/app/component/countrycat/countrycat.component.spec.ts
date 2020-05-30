import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrycatComponent } from './countrycat.component';

describe('CountrycatComponent', () => {
  let component: CountrycatComponent;
  let fixture: ComponentFixture<CountrycatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrycatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
