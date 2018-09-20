import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import{ConfigService} from '../../../../../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class OfficeListService {
  c : ConfigService;
  
  api: string = "offices";

  constructor(private  httpClient:  HttpClient) { 
      this.c = new ConfigService(httpClient);
    }

  getOffices(){
    console.log(`GET OFFICES API - URL: ${this.c.getPath("home")}/${this.api}/${this.api}.php`);
    return  this.httpClient.get(`${this.c.getPath("home")}/${this.api}/${this.api}.php`);
  }



}


