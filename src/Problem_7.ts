{
    //Ts class Car with properties make, model, and year.
    
    class Car {
        make:string;
        model:string;
        year: number;

        constructor(make: string, model:string, year:number){
            this.make = make;
            this.model = model;
            this.year = year;
        }

        getCarAge():number {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }

    // Input 
    const car = new Car("Tata", "BMW", 2011);

    console.log(car.getCarAge());

    // 
}