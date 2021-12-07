import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxsComponent } from './boxs.component';

describe('BoxesComponent', () => {
  let component: BoxsComponent;
  let fixture: ComponentFixture<BoxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
