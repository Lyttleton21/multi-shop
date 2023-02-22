import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/pages/cart/cart.component';
import { FavoritesPageComponent } from './components/pages/favorites-page/favorites-page.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    title: 'Multi Shop',
    component:  HomeComponent
  },
  {
    path:'search/:searchProduct',
    title: 'Multi Shop',
    component:  HomeComponent
  },
  {
    path:'cart-page',
    title:'Shopping Cart',
    component:CartComponent
  },
  {
    path:'favorite-page',
    title:'Favorite Products',
    component:FavoritesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
