import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import{ConfigService} from '../../../../../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarPageListService {

  c : ConfigService;
  
  api: string = "navbar-pages";

  constructor(private  httpClient:  HttpClient) { this.c = new ConfigService(httpClient); }

  getNavbarPages(){
    console.log(`GET NAVBAR-PAGES API - URL: ${this.c.getPath("home")}/${this.api}/${this.api}.php`);
    return  this.httpClient.get(`${this.c.getPath("home")}/${this.api}/${this.api}.php`);
  }
}
