import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { state } from '../Class/state';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http : HttpClient) { }
  url_getState="https://cdn-api.co-vin.in/api/v2/admin/location/states";
  ulr_getDistrict="https://cdn-api.co-vin.in/api/v2/admin/location/districts";
  ulr_getCenter="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?";

  url_dailycase="https://api.covid19india.org/data.json";

  getDataByState() : Observable<state[]>
  {
      return this.http.get<state[]>(this.url_getState);
  }
  getDataByDistrict(stateid:any)
  {
      return this.http.get(`${this.ulr_getDistrict}/${stateid}`);
  }
  getDataCenter(district_id:any,date:any)
  {
      return this.http.get(this.ulr_getCenter+'district_id='+district_id+'&date='+date);
  }
  
  getDataDailyCaseIndai()
  {
      return this.http.get(this.url_dailycase);
  }
  url="http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22"
  dailyForecast() {
    return this.http.get(this.url);
  }
}
