export class Users{

    first_name: String= ""
    last_name: String= ""
    email: String= ""
    username: String= ""
    psw: String= ""
    phone: String= ""
    birthday: String= ""
    cni: String= ""
    driver_license_number: String= ""
    registration_number: String= ""
    card_number: String= ""
    car_brand: String= ""
    commercial_type: String= ""
    car_color: String= ""

    constructor(){

    }

    builder(first_name:String, last_name:String, email:String, username:String, psw:String, phone:String, birthday:String, cni:String, driver_license:String, registration_number:String, card_number:String, car_brand:String, commercial_type:String, car_color:String){
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.username = username
        this.psw = psw
        this.phone = phone
        this.birthday = birthday
        this.cni = cni
        this.driver_license_number = driver_license
        this.registration_number = registration_number
        this.card_number = card_number
        this.car_brand = car_brand
        this.commercial_type = commercial_type
        this.car_color = car_color 
    }

    fromInterface(userIn :UsersInterface ){
        this.first_name = userIn.first_name
        this.last_name = userIn.last_name
        this.email = userIn.email
        this.username = userIn.username
        this.psw = userIn.psw
        this.phone = userIn.phone
        this.birthday = userIn.birthday
        this.cni = userIn.cni
        this.driver_license_number = userIn.driver_license_number
        this.registration_number = userIn.registration_number
        this.card_number = userIn.card_number
        this.car_brand = userIn.car_brand
        this.commercial_type = userIn.commercial_type
        this.car_color = userIn.car_color        

    }

}

export interface UsersInterface{
    first_name: String,
    last_name: String,
    email: String,
    username: String,
    psw: String,
    phone: String,
    birthday: String,
    cni: String,
    driver_license_number: String,
    registration_number: String,
    card_number: String,
    car_brand: String,
    commercial_type: String,
    car_color: String
}