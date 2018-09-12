import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from './router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalComponent } from './personal/personal.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MyservicesComponent } from './myservices/myservices.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      NavComponent,
      BlogComponent,
      ContactComponent,
      FooterComponent,
      PersonalComponent,
      GalleryComponent,
      MyservicesComponent
   ],
   imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
