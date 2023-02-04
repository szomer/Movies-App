// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SliderComponent } from './components/slider/slider.component';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { ItemComponent } from './components/item/item.component';
import { MovieComponent } from './pages/movie/movie.component';

// prime ng
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview'; // imports only what i need

@NgModule({
  declarations: [
    // My components available in the app
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    SliderComponent,
    ItemsBannerComponent,
    ItemComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // used to make animations
    AppRoutingModule, // takes care of routing
    HttpClientModule, // needed to make http req
    PaginatorModule, // page navigation - primeNG
    TabViewModule, // tab navigation - primeNG
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
