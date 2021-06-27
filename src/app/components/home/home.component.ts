
import { ApiserviceService } from './../../services/apiservice.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  State_Data:any=[];
  District_Data:any=[];
  Center_Data:any=[];
  form : FormGroup;


  constructor(private service : ApiserviceService,private route: Router) { 
  
  }
  
  ngOnInit() {
    this.form = new FormGroup(
      {
          state : new FormControl('',Validators.required),
          district :new FormControl('',Validators.required),
          date : new FormControl('',Validators.required),
      }
    )
    this.service.getDataByState().subscribe((result)=>{
      this.State_Data=result;
      this.State_Data=this.State_Data.states;
    })
  }
  
  get f()
  {
    return this.form.controls;
  }

  onsubmit()
  {
      const date =this.form.controls['date'].value;
      const reverce_date = date.split('-').reverse().join('-');
      this.service.getDataCenter(this.form.controls['district'].value,reverce_date).subscribe(
        (result)=>{
          this.Center_Data=result;
          this.Center_Data=this.Center_Data.sessions;
        }
      )
  }
  onClickState()
  {
    if(this.form.controls['state'].value==""){
    }
    else{
      console.warn(this.form.controls['state'].value);
      this.service.getDataByDistrict(this.form.controls['state'].value).subscribe(
        (result)=>{
          this.District_Data=result;
          this.District_Data=this.District_Data.districts;
        }
      )
    }
  }
}
