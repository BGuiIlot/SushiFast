import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RgpdComponent } from "./components/rgpd/rgpd.component";
import { BoxsComponent } from "./components/boxs/boxs.component";
import { BoxComponent } from './components/box/box.component';

const routes: Routes = [
{ path: 'rgpd', component: RgpdComponent },
{ path: 'boxe', component: BoxComponent },
{ path: '', component: BoxsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
