let Location = require('./Models/Location.js');
let ParkingLot = require('./Models/ParkingLot.js');
let Vehicle = require('./Models/Vehicle.js');
let VehicleType = require('./Models/VehicleType.js');

let location = new Location("Barpeta", "Assam", "781301", "12");
let parkingLot = new ParkingLot("Barpeta Bazar", location);

let car1 = new Vehicle("1234acfe", "available", null, VehicleType.CAR, parkingLot);
let car2 = new Vehicle("1234xbhf", "available", null, VehicleType.CAR, parkingLot);
let car3 = new Vehicle("1234skdb", "available", null, VehicleType.CAR, parkingLot);
let car4 = new Vehicle("123sdcbs", "available", null, VehicleType.CAR, parkingLot);
