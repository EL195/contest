import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { GaleryComponent } from './galery/galery.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PartnersComponent } from './partners/partners.component';
import { VoteComponent } from './vote/vote.component';


const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent 
    },
    { 
      path: 'faq', 
      component: FaqComponent 
    },
    { 
      path: 'vote', 
      component: VoteComponent 
    },
    { 
      path: 'galery', 
      component: GaleryComponent 
    },
    { 
      path: 'about', 
      component: AboutComponent 
    },
    { 
      path: 'partners', 
      component: PartnersComponent 
    },
   { 
     path: 'notfound', 
     component: NotfoundComponent 
   },
   {
   path: '', redirectTo: 'home', pathMatch: 'full' 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
