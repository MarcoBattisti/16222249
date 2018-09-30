import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import {IOption} from 'ng-select';
import{ConfigService} from '../../../../../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class OfficeListService {
  c : ConfigService;

  office:Array<Office>;

  officesOption: Array<IOption> = [];

  api: string = "data";

  constructor(private  httpClient:  HttpClient) { 
      this.c = new ConfigService(httpClient);
    }

  getOffices(){
    console.log(`GET OFFICES API - URL: ${this.c.getPath("common")}/${this.api}/${this.api}.php`);
    this.httpClient.get<Array<Office>>(`${this.c.getPath("common")}/${this.api}/${this.api}.php`).subscribe(
    (result: Array<Office>) => 
    {console.log('success', result);
      this.office = result},
    (error: any) => { 
      console.log('error', error);
    });
  }

  getOfficesIOption() : Array<IOption>{
    console.log(`GET OFFICES API - URL: ${this.c.getPath("common")}/${this.api}/${this.api}.php`);
    this.httpClient.get<Array<Office>>(`${this.c.getPath("common")}/${this.api}/${this.api}.php`).subscribe(
    (result: Array<Office>) => 
    {console.log('success', result);
      this.office = result;
      this.office.forEach(function (value) {
        let iOption : IOption = {"label" : `${value.nome} (${value.sigla})`, "value":`${value.id}`};
        this.officesOption.push(iOption)
        console.log(`OPTION: Label[${value.nome} (${value.sigla})] - Value[${value.id}]`);
      });
      return this.officesOption;},
    (error: any) => { 
      console.log('error', error);
    });
    return undefined;
  }
}

export class Office {
  id: number;
  nome: string;
  cap: number;
  cm_codice: string;
  cm_nome: string;
  codice: number;
  codice_catastale: string;
  provincia_codice: number; 
  provincia_nome: string;
  regione_codice: number;
  regione_nome: string;
  sigla: string;
  zona_codice: number;
  zona_nome: string;
}


