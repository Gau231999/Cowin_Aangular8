
import { Router } from '@angular/router';
import { ApiserviceService } from './../../services/apiservice.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'; 



@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  type = 'LineChart';
  data : any= [ ["",0,0,0] ];
  columnNames = ["Date", "Daily Confirmed","Daily Deaths","Daily recovered"];
  options = {   
     hAxis: {
        title: 'Date'
     },
     vAxis:{
        title: 'Daily Case'
     },
     crosshair:{
      color:'#000000',
      trigger:'selection'  
     }
  };
  width = 1350;
  height = 500;
  Daily_case : any =[];
  chart:any=[];
  constructor(private service : ApiserviceService,private route: Router) { 
     console.warn(this.data)
  }

  ngOnInit() {
    this.service.getDataDailyCaseIndai().subscribe((result)=>{
      this.Daily_case=result['cases_time_series'];
      for (let element of  this.Daily_case) {  
        this.data.push(  [element.date ,element.dailyconfirmed,element.dailydeceased,element.dailyrecovered]);
      }  
      this.Daily_case.sort(this.sortByDate);
    })
    
  }

  sortByDate(a, b) {
    if (a.dateymd > b.dateymd) {
      return -1;
    }
    if (a.dateymd < b.dateymd) {
      return 1;
    }
    return 0;
  }
}
