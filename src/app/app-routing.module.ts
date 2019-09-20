import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListProduitComponent } from './components/list-produit/list-produit.component';


const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  { path: 'produits', component: ListProduitComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
