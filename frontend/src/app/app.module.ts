import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
//import { NgOptimizedImage } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars, faHeart, faCartPlus, faAngleDown, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { CarouselPageComponent } from './components/partial/carousel-page/carousel-page.component';
import { TopbapComponent } from './components/partial/topbap/topbap.component';
import { NavbarComponent } from './components/partial/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeCarouselComponent } from './components/partial/home-carousel/home-carousel.component';
import { FooterComponent } from './components/partial/footer/footer.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { BreadcrumbComponent } from './components/partial/breadcrumb/breadcrumb.component';
import { FavoritesPageComponent } from './components/pages/favorites-page/favorites-page.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselPageComponent,
    TopbapComponent,
    NavbarComponent,
    HomeComponent,
    HomeCarouselComponent,
    FooterComponent,
    CartComponent,
    BreadcrumbComponent,
    FavoritesPageComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
    //NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library: FaIconLibrary){
    library.addIcons(faBars, faHeart)
  }

}
