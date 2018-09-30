import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}
  
  protocol : string = "http"

  config: Config = {host:"localhost:80", context:"api"};

  page: Page = {home: "homePage", common: "common"}

  getConfig(){
    return this.config;
  }

  getPath(pageParam: string){
    try {
      var path : string = `${this.protocol}://${this.config["host"]}/${this.config["context"]}/${this.page[pageParam]}`;
      return path;
    } catch (error) {
      console.log("The page param doesn't works!");
    }
  }
}

export class Page {
  home: string;
  common: string;
}


export class Config {
  host: string;
  context: string;
}
