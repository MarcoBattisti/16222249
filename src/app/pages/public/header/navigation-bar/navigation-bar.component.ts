import { Component, OnInit } from '@angular/core';
import { navbarItem } from './navbar-Item';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  navbarItems: Array<navbarItem>;
  
  constructor() { this.navbarItems = [new navbarItem('home','Home'), new navbarItem('about-me','Chi sono'), new navbarItem('my-activities','Attività'), new navbarItem('news','News'), new navbarItem('contact','Contatti')];}

  ngOnInit() {
  }

}
