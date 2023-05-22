import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { TechPageComponent } from './pages/tech-page/tech-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path : 'search/:searchTerm', component: MainPageComponent},
  {path: 'tag/:tag', component: MainPageComponent},
  {path: 'cart' , component : CartPageComponent},
  {path : 'tech-items/:id', component : TechPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
