import { Component, OnInit } from '@angular/core';
import { HotelModel } from './hotel-model';
import { HotelservicesService } from './hotelservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotelmanagement',
  templateUrl: './hotelmanagement.component.html',
  styleUrls: ['./hotelmanagement.component.css']
})
export class HotelmanagementComponent implements OnInit {
  arrdata: HotelModel[] = [];

  constructor(private _hdata: HotelservicesService,
    private _router: Router) { }

  ngOnInit() {
    this._hdata.getAllHotels().subscribe(
      (data: HotelModel[]) => {
        this.arrdata = data;
      },
      function (err) {
        console.log(err);
      },
      function () {
        console.log('call completed');
      }
    );

  }
  onDelHotel(item: HotelModel) {
    this._hdata.deleteHotel(item.hotel_id).subscribe(
      (data: any) => {
        console.log(data);
        if (data.affectedRows > 0) {
          this.arrdata.splice(this.arrdata.indexOf(item), 1);
          console.log(this.arrdata);
        }
        else {
          alert('something went wrong!');
        }
      }
    );
  }
  onUpdateHotel(item: HotelModel) {
    this._router.navigate(['/edithotel', item.hotel_id]);
  }
}
