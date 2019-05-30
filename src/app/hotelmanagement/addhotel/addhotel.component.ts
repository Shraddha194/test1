import { Component, OnInit } from '@angular/core';
import { HotelservicesService } from '../hotelservices.service';
import { HotelModel } from '../hotel-model';
import { from } from 'rxjs';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

  constructor(public _datahtl:HotelservicesService) { }

  ngOnInit() {
  }
  onHotelSave(f){
    let hotel=f.form.value;
    this._datahtl.addHotel(hotel).subscribe(
      (data:any)=>{
        if(data.affectedRows==1){
          console.log(data.insertId);
         alert('Successfully added one record');
       }
      else{
         alert('something went wrong');
       }
     }
   );
  }

}
