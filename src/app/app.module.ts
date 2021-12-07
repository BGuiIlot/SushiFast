import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RgpdComponent } from './components/rgpd/rgpd.component';
import { BoxsComponent } from './components/boxs/boxs.component';
import { BoxComponent } from './components/box/box.component';
import { PanierComponent } from './components/panier/panier.component';
import { HistoriqueCommandeComponent } from './components/historique-commande/historique-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RgpdComponent,
    BoxsComponent,
    BoxComponent,
    PanierComponent,
    HistoriqueCommandeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
