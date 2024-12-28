import { Component } from '@angular/core';
import { LandingComponent } from '../landing/landing.component';
import { ProductComponent } from '../product/product.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [ LandingComponent , ProductComponent , ContactComponent , AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
