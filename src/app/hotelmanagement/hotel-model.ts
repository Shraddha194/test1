export class HotelModel {
    public constructor(
        public hotel_id:number,
        public hotel_name:string,
        public owner_name:string,
        public mo_no:number,
        public email:string,
        public star_cat:string,
        public owner_type:string,
        public city:string,
        public pincode:number
    ){
        
    }
}
