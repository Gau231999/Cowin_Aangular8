import { district } from './../../Class/district';
import { state } from './../../Class/state';


import { ApiserviceService } from './../../services/apiservice.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { center } from 'src/app/Class/center';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  state_Data: state[] = [];
  district_Data: district[] = [];
  center_Data: center[]= [];
  form: FormGroup;


  constructor(private service: ApiserviceService, private route: Router) {

  }

  ngOnInit() {
    this.form = new FormGroup(
      {
        state: new FormControl('', Validators.required),
        district: new FormControl('', Validators.required),
        date: new FormControl('', Validators.required),
      }
    )
    this.service.getDataByState().subscribe((result) => {
      this.state_Data = result['states'];
    })

  }

  get f() {
    return this.form.controls;
  }

  onsubmit() {
    const date = this.form.controls['date'].value;
    const reverce_date = date.split('-').reverse().join('-');
    this.service.getDataCenter(this.form.controls['district'].value, reverce_date).subscribe(
      (result) => {
        this.center_Data = result['sessions'];
      }
    )
  }
  onClickState() {
    this.form.patchValue({ "district": "" });
  }
  onClickDistric() {
    if (!this.form.controls['state'].value == null) {

    }
    else {
      this.service.getDataByDistrict(this.form.controls['state'].value).subscribe(
        (result) => {
          this.district_Data = result['districts'];         
        }
      )
    }
  }

  
}
