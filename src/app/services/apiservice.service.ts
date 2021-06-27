import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http : HttpClient) { }
  url_getState="https://cdn-api.co-vin.in/api/v2/admin/location/states";
  ulr_getDistrict="https://cdn-api.co-vin.in/api/v2/admin/location/districts";
  ulr_getCenter="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?";
  getDataByState()
  {
      return this.http.get(this.url_getState);
  }
  getDataByDistrict(stateid:any)
  {
      return this.http.get(`${this.ulr_getDistrict}/${stateid}`);
  }
  getDataCenter(district_id:any,date:any)
  {
      console.log(district_id);
      console.log(date);
      return this.http.get(this.ulr_getCenter+'district_id='+district_id+'&date='+date);
  }
  
}
