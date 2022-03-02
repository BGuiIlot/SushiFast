import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RgpdComponent } from "./components/rgpd/rgpd.component";
import { BoxsComponent } from "./components/boxs/boxs.component";
import { HistoriqueCommandeComponent } from './components/historique-commande/historique-commande.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'rgpd', component: RgpdComponent },
  { path: 'boxes', component: BoxsComponent },
  { path: 'historique', component: HistoriqueCommandeComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }