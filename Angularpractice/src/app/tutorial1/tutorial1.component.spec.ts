import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial1Component } from './tutorial1.component';

describe('Tutorial1Component', () => {
  let component: Tutorial1Component;
  let fixture: ComponentFixture<Tutorial1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutorial1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tutorial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
