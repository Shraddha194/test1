import { Component, OnInit } from '@angular/core';
import { HotelModel } from '../hotel-model';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelservicesService } from '../hotelservices.service';

@Component({
  selector: 'app-edithotel',
  templateUrl: './edithotel.component.html',
  styleUrls: ['./edithotel.component.css']
})
export class EdithotelComponent implements OnInit {
  hotel_id:number;
  hotel:HotelModel={hotel_id:0,hotel_name:'',owner_name:'',mo_no:0,email:'',star_cat:'',owner_type:'',city:'',pincode:0};
  constructor(private _activatedRoute:ActivatedRoute,
    private _hotelData:HotelservicesService,
    private _router:Router) { }

  ngOnInit() {
    this.hotel_id=this._activatedRoute.snapshot.params['hotel_id'];
    this._hotelData.getHotelById(this.hotel_id).subscribe(
      (data:HotelModel[])=>{
        console.log(data);
       this.hotel=data[0];
      }
    );
  }
  onSave(hotel_id,hotel_name,owner_name,mo_no,email,star_cat,owner_type,city,pincode){
    let hotel=new HotelModel(hotel_id,hotel_name,owner_name,mo_no,email,star_cat,owner_type,city,pincode);
    this._hotelData.updateHotel(hotel).subscribe(
      (data:any)=>{
        if(data.affectedRows===1){
          alert('data updated successfully');
          this._router.navigate(['/']);
        }
        else{
          alert('failure');
        }
      }
    );
  }
}
