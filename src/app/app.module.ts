import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routingArr } from './app.routing';
import { AppComponent } from './app.component';
import { HotelmanagementComponent } from './hotelmanagement/hotelmanagement.component';
import { AddhotelComponent } from './hotelmanagement/addhotel/addhotel.component';
import { MenuComponent } from './menu.component';
import { ContactdirectiveDirective } from './hotelmanagement/contactdirective.directive';
import { SearcpipePipe } from './searcpipe.pipe';
import { PincodedirectiveDirective } from './pincodedirective.directive';
import { EdithotelComponent } from './hotelmanagement/edithotel/edithotel.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelmanagementComponent,
    AddhotelComponent,
    MenuComponent,
    ContactdirectiveDirective,
    SearcpipePipe,
    PincodedirectiveDirective,
    EdithotelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routingArr
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
