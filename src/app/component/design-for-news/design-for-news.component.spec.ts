import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignForNewsComponent } from './design-for-news.component';

describe('DesignForNewsComponent', () => {
  let component: DesignForNewsComponent;
  let fixture: ComponentFixture<DesignForNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignForNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignForNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
