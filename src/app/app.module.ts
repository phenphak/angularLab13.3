import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TopBannerComponent,
    SearchBarComponent,
    CategoryMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
