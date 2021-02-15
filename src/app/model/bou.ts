export class Bou{
    departure: String = "" 
    arrive: String = ""
    date: String= ""
    hours: String = ""
    price: String = ""
    seat: number[] 
    
    constructor(departure: String, arrive: String, date: String, hours: String, price: String, seat: number){
        this.departure = departure
        this.arrive = arrive
        this.date = date
        this.hours = hours
        this.price = price
        this.seat = Array(seat).fill(0);
    }



}