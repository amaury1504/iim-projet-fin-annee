import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HeaderComponent },
  { path: 'Story', component: ContentComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
