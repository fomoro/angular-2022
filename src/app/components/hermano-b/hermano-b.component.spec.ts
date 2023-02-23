import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HermanoBComponent } from './hermano-b.component';

describe('HermanoBComponent', () => {
  let component: HermanoBComponent;
  let fixture: ComponentFixture<HermanoBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HermanoBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HermanoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
