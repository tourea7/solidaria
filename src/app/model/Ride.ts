export class Ride{
    departure: String = "" 
    arrive: String = ""
    date: String= ""
    hours: String = ""
    price: String = ""
    seat: number[] = []
    username: String=""
    email: String=""

    constructor(){}
    
    builder(departure: String, arrive: String, date: String, hours: String, price: String, seat: number): Ride{
        this.departure = departure
        this.arrive = arrive
        this.date = date
        this.hours = hours
        this.price = price
        this.seat = Array(seat).fill(0);
        return this
    }

    fromInterface(rideIn :RideInterface ){
        this.departure = rideIn.departure
        this.arrive = rideIn.arrive
        this.date = rideIn.date
        this.hours = rideIn.hours
        this.price = rideIn.price
        this.seat = Array(rideIn.seat).fill(0)
        this.username= rideIn.username
        this.email= rideIn.email
        
    }

}

export interface RideInterface{
    departure: String , 
    arrive: String ,
    date: String,
    hours: String ,
    price: String ,
    seat: number ,
    username: String,
    email: String,
}