import { Pipe, PipeTransform } from '@angular/core';
import { HotelModel } from './hotelmanagement/hotel-model';

@Pipe({
  name: 'searcpipe'
})
export class SearcpipePipe implements PipeTransform {

  transform(value: HotelModel[], args: string, argsdata: string): any {
    if(argsdata=='byOwner'){
      return value.filter((a)=>a.owner_name.startsWith(args));
    }
    else{
      return value.filter((a)=>a.hotel_name.startsWith(args));
    }
    
  }

}
