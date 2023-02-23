import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HermanoAComponent } from './hermano-a.component';

describe('HermanoAComponent', () => {
  let component: HermanoAComponent;
  let fixture: ComponentFixture<HermanoAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HermanoAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HermanoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
