import { Component, OnInit } from '@angular/core';
import clssnms from 'clssnms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  classNames = clssnms('header');

  constructor() { }

  ngOnInit() {
  }

}
