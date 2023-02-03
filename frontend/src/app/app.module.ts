import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars, faHeart, faCartPlus, faAngleDown, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { CarouselPageComponent } from './components/partial/carousel-page/carousel-page.component';
import { TopbapComponent } from './components/partial/topbap/topbap.component';
import { NavbarComponent } from './components/partial/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselPageComponent,
    TopbapComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library: FaIconLibrary){
    library.addIcons(faBars, faHeart)
  }

}
