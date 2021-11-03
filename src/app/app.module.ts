import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { PortfolioSlideComponent } from './portfolio-slide/portfolio-slide.component';
import { SideComponentComponent } from './side-component/side-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PortfolioSlideComponent,
    SideComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
