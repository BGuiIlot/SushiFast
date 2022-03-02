import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { HistoriqueCommandeComponent } from './historique-commande.component';

describe('HistoriqueCommandeComponent', () => {
  let component: HistoriqueCommandeComponent;
  let fixture: ComponentFixture<HistoriqueCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HistoriqueCommandeComponent]
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

  describe('doit formater le prix', () => {
    it('doit ajouter le symbole € après le nombre', () => {
      expect(component.transform(3.54)).toEqual('3.54 €');
    });
    it('doit toujours avoir deux chiffres après la virgule', () => {
      expect(component.transform(5)).toEqual('5.00 €');
    });
    it('doit arrondir à 2 décimales près', () => {
      expect(component.transform(5.5555)).toEqual('5.56 €');
    });
  });
});
