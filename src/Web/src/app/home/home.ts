import { Component } from '@angular/core';
import {ClientHeader} from '../client-header/client-header';

@Component({
  selector: 'app-home',
  imports: [
    ClientHeader
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
