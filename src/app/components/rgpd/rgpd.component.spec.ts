import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgpdComponent } from './rgpd.component';

describe('RgpdComponent', () => {
  let component: RgpdComponent;
  let fixture: ComponentFixture<RgpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RgpdComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Est-ce que mon titre s\'affiche', () => {
    const rootElt = fixture.nativeElement;

    const title = rootElt.querySelector("div h1:first-of-type").textContent;
    expect(title).toContain('Responsable')
  })
});
