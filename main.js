var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started.");
    };
    return Car;
}());
var myCar = new Car("MERCEDES", "GLA 250 SUV", 2025);
myCar.start();
