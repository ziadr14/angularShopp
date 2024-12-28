import { Routes } from '@angular/router';
import { HomeComponent } from './componant/home/home.component';
import { ProductComponent } from './componant/product/product.component';
import { AboutComponent } from './componant/about/about.component';
import { ContactComponent } from './componant/contact/contact.component';
import { CardComponent } from './componant/card/card.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product' , component : ProductComponent},
  { path: 'about' , component:AboutComponent},
  { path: 'contact' , component : ContactComponent},
  { path: 'card' , component : CardComponent},
  {path : '*' , redirectTo : 'home' , pathMatch : 'full'}
];
