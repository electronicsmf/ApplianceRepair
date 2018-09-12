import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PersonalComponent } from './personal/personal.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutComponent},
   { path: 'contact', component: ContactComponent},
   { path: 'services', component: ServicesComponent},
   { path: 'personal', component: PersonalComponent},
   { path: 'gallery', component: GalleryComponent },
   { path: 'blog', component: BlogComponent},
   { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
