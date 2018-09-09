import { Component, OnInit } from '@angular/core';
import { navbarItem } from '../..//header/navigation-bar/navbar-Item';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.css']
})
export class FooterBarComponent implements OnInit {
  links : Array<navbarItem>;

  constructor() { 
    this.links = [new navbarItem('home','Home'), new navbarItem('about-me','Chi sono'), new navbarItem('my-activities','Attività'), new navbarItem('news','News'), new navbarItem('contact','Contatti')];
  }

  ngOnInit() {
  }

  animationIn="rubberBand";
  animationOut="jello";
}
