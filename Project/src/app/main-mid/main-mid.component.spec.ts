import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMidComponent } from './main-mid.component';

describe('MainMidComponent', () => {
  let component: MainMidComponent;
  let fixture: ComponentFixture<MainMidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
