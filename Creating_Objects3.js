function VehicleConstructor(name, wheels, passengers, speed) {

/* Privates */
    var distance_travelled= 0;
    self = this;

    function updateDistanceTravelled(speed){
        distance_travelled += self.speed;
    }
    function generateVin(){
        newvin = ""
        vinchar = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        i=1
        while (i<=17){
            newvin += vinchar[Math.floor(Math.random()* 36)]
            i++
        }
        return newvin
    }

    /* Public */
        this.vin = generateVin();
        this.speed = speed;
        this.name = name;
        this.wheels = wheels;
        this.passengers = passengers;


    VehicleConstructor.prototype.makenoise = function(){
            console.log(this.name + " says: Vroom Vroom");
            // return this
    }
    VehicleConstructor.prototype.move= function(){
        updateDistanceTravelled();
        this.makenoise();
    }
    VehicleConstructor.prototype.checkMiles = function(){
        console.log(this.name + " has travelled " + distance_travelled + " miles.");
      };
}
var bike = new VehicleConstructor("iBike", 2, 1,25);

bike.makenoise = function(){
    console.log(bike.name + " says: ring ring!");
    // return bike;
}

sedan = new VehicleConstructor("Toyota Corolla", 4, 5, 55);
sedan.makenoise = function(){
    console.log(sedan.name + "says beep beep!");
    return sedan
}
sedan.makenoise()

console.log(sedan);
console.log(sedan.makenoise());
bus = new VehicleConstructor("550 Bus to Seattle", 12, 50,45);
bus.pickup = function(riders){
    bus.passengers +=riders;
}

console.log(bike.makenoise());

console.log(bus.name + " has "+ bus. passengers + " passengers.");
bus.pickup(6);
console.log(bus.name + " has "+ bus. passengers + " passengers.");
bus.makenoise()

bus.move()
bus.move();
console.log(bus.checkMiles());
console.log("The bus speed is " + bus.speed + " MPH.");
console.log(bus.distance_travelled); //this logs undefined because it is outside the scope
// console.log( distance_travelled); notice this does not print by design when not commented out

console.log("The sedan vin is " + sedan.vin)
sedan.vin = 1111111111111
console.log(sedan.vin);
console.log("The sedan vin is " + sedan.vin)

// console.log("The bus vin is " + bus.getvin())
// // console.log("The iBike vin is " + bike.getvin())
// console.log("The iBike vin is " + bike.getvin())
// console.log(sedan.vin);
// console.log(bike.vin);
// console.log("The iBike vin is " + bike.getvin())
