import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HeaderMenu } from './header-menu/header-menu';
import { HeaderActions } from './header-actions/header-actions';

@Component({
  selector: 'app-client-header',
  imports: [NgOptimizedImage, HeaderMenu, HeaderActions],
  templateUrl: './client-header.html',
  styleUrl: './client-header.css',
})
export class ClientHeader {}
