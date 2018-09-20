import { Component, OnInit } from '@angular/core';
import { navbarItem } from './navbar-Item';
import { NavbarPageListService } from  '../../body/home-page/Api/navbar_pages/navbar-page-list.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  navbarItems: Array<navbarItem>;
  
  constructor(private navbarPageList : NavbarPageListService) { }

  ngOnInit() {
    this.getNavbarPages();
  }

  public getNavbarPages(){
    this.navbarPageList.getNavbarPages().subscribe((data:  Array<navbarItem>) => {
      this.navbarItems = data;
    });
  }
}
