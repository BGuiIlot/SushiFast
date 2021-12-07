import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueCommandeComponent } from './historique-commande.component';

describe('HistoriqueCommandeComponent', () => {
  let component: HistoriqueCommandeComponent;
  let fixture: ComponentFixture<HistoriqueCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
