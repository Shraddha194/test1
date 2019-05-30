import { Injectable } from '@angular/core';
import { HotelModel } from './hotel-model';
import { endPoints }  from '../../environments/environment';
import { from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HotelservicesService {
  url=endPoints.url+"hotel/";
  commonHeader=new HttpHeaders().set('Content-Type','application/json');

  constructor(private _http:HttpClient) { }
  getAllHotels(){
    return this._http.get<HotelModel[]>(this.url);
  }
  getHotelById(hotel_id:number){
    return this._http.get<HotelModel[]>(this.url+hotel_id);
  }
  addHotel(item:HotelModel){
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:this.commonHeader});
  }
  updateHotel(item:HotelModel){
    let body=JSON.stringify(item);
    return this._http.put(this.url+item.hotel_id,body,{headers:this.commonHeader});
  }
  deleteHotel(hotel_id:number){
    console.log('hotel id'+hotel_id);
    return this._http.delete(this.url+hotel_id,{headers:this.commonHeader});
  }
}
