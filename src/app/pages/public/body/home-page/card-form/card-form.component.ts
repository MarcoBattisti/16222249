import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {IOption} from 'ng-select';
import { OfficeListService } from  '../Api/offices/office-list.service';
import { RequestListService } from  '../Api/requests/request-list.service';

@Component({
  selector: 'card-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  cardForm: FormGroup;

  requests: Array<IOption> ;

  myOptions: Array<IOption>;

  request : string = '';

  onSelectedRequest(option: IOption) {
    this.request = `${option.value}`;
  }

  onDeselectedRequest(option: IOption) {
      this.request = undefined;
  }

    office: string = '';

    onSelected(option: IOption) {
        this.office = `${option.value}`;
    }

    onDeselected(option: IOption) {
        this.office = undefined;
    }

  constructor(private  officeList:  OfficeListService, private  requestList:  RequestListService) {
    
  }

  ngOnInit() {
    this.getRequests();
    this.getOffices();
    this.cardForm = new FormBuilder().group({
      SelectRequest: ['', Validators.required],
      contactFormName: ['', [Validators.pattern('[a-zA-Z ]+')]],
      contactFormEmail: ['', [Validators.email, Validators.required]],
      contactFormNumber: ['', [Validators.pattern('[0-9]*')]],
      contactFormMessage: ['', Validators.required],
      selectWorkOffice: ['', Validators.required]
      });
  }

  public getOffices(){
    this.myOptions = this.officeList.getOfficesIOption();
  }

  public getRequests(){
    this.requestList.getRequests().subscribe((data:  Array<IOption>) => {
      this.requests = data;
    });
  }
}

