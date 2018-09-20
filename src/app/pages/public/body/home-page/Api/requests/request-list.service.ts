import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import{ConfigService} from '../../../../../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class RequestListService {

  c : ConfigService;
  
  api: string = "requests";

  constructor(private  httpClient:  HttpClient) { 
    this.c = new ConfigService(httpClient);
  }

  getRequests(){
    console.log(`GET REQUESTS API - URL: ${this.c.getPath("home")}/${this.api}/${this.api}.php`);
    return  this.httpClient.get(`${this.c.getPath("home")}/${this.api}/${this.api}.php`);
  }
}
