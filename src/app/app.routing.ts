import { Routes, RouterModule } from '@angular/router';
import { HotelmanagementComponent } from './hotelmanagement/hotelmanagement.component';
import { AddhotelComponent } from './hotelmanagement/addhotel/addhotel.component';
import { EdithotelComponent } from './hotelmanagement/edithotel/edithotel.component';

const arr:Routes=[
    {path:'', component:HotelmanagementComponent},
    {path:'addhotel',component:AddhotelComponent},
    {path:'edithotel/:hotel_id',component:EdithotelComponent}
];

export const routingArr=RouterModule.forRoot(arr);