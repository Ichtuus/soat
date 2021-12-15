import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewHomeComponent } from './view/home/home.component';

const routes: Routes = [
  { path: '', component: ViewHomeComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentification/authentification.module').then((m) => m.AuthentificationModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentification/authentification.module').then((m) => m.AuthentificationModule),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
