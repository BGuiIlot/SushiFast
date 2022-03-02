import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('test du router link', () => {
    it('est-ce que si je clique sur le bouton rgpd, le site me redirige bien sur l\'adresse localhost/rgpd avec RouterTesting', () => {
      fixture.detectChanges();
      const rootElt = fixture.debugElement;
      const href = rootElt.query(By.css('a')).nativeElement.getAttribute('href');
      expect(href).toEqual('/rgpd')
    });
    it('est-ce que si je clique sur le bouton rgpd, le site me redirige bien sur l\'adresse localhost/rgpd avec RouterLinkWithHref', () => {
      fixture.detectChanges();
      const rootElt = fixture.debugElement;
      const LinkElt = rootElt.query(By.css('a'));
      const routerLinkInstance = LinkElt.injector.get(RouterLinkWithHref);
      expect(routerLinkInstance['commands']).toEqual(['/rgpd']);
      expect(routerLinkInstance['href']).toEqual('/rgpd')
    })
  });


});
