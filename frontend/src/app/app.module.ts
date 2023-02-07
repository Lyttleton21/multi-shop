import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'

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
import { FeaturedProductsComponent } from './components/partial/featured-products/featured-products.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselPageComponent,
    TopbapComponent,
    NavbarComponent,
    HomeComponent,
    HomeCarouselComponent,
    FooterComponent,
    FeaturedProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library: FaIconLibrary){
    library.addIcons(faBars, faHeart)
  }

}
