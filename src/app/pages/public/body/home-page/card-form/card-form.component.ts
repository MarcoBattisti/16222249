import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'card-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  cardForm: FormGroup;

  cities = [
    {id: 1, name: 'Sede di Siena'},
    {id: 2, name: 'Sede di Grosseto'}
  ];
  
  constructor(private fb: FormBuilder) {
    this.cardForm = fb.group({
    contactFormName: ['', Validators.required],
    contactFormEmail: ['', [Validators.email, Validators.required]],
    contactFormNumber: ['', [Validators.pattern('^(0|[1-9][0-9]*)$'), Validators.required]],
    contactFormMessage: ['', Validators.required]
    });
  }

  selectedCity = null;

  ngOnInit() {
  }

}

