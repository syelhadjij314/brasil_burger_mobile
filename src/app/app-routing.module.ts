import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'tab1',
    loadChildren: () => import('./catalogue/catalogue.module').then(m => m.CataloguePageModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailPageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then(m => m.PanierPageModule)
  },
  {
    path: 'securite',
    loadChildren: () => import('./securite/securite.module').then( m => m.SecuritePageModule)
  },
  {
    path: '',
    redirectTo: '/tab1',
    pathMatch: 'full',

  },
  {
    path: 'commande',
    loadChildren: () => import('./commande/commande.module').then( m => m.CommandePageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'detail-commande/:id',
    loadChildren: () => import('./detail-commande/detail-commande.module').then( m => m.DetailCommandePageModule)
  },
  {
    path: 'livraison',
    loadChildren: () => import('./livraison/livraison.module').then( m => m.LivraisonPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
