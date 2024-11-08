"use strict";
{
    //Ts class Car with properties make, model, and year.
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }
    // Input 
    const car = new Car("Tata", "BMW", 2011);
    console.log(car.getCarAge());
    // 
}
