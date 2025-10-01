import { Component } from '@angular/core';
import { ClientHeader } from '../client-header/client-header';
import { ProductListing } from '../product-listing/product-listing';

@Component({
  selector: 'app-home',
  imports: [
    ClientHeader,
    ProductListing,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  protected readonly Array = Array;
}
