let Location = require('./Models/Location.js');
let ParkingLot = require('./Models/ParkingLot.js');
let Vehicle = require('./Models/Vehicle.js');
let VehicleType = require('./Models/VehicleType.js');

let location = new Location("Barpeta", "Assam", "781301", "12");
let parkingLot = new ParkingLot("Barpeta Bazar", location);

let VehicleService = require('./Service/VehicleService.js');
let VehicleManager = require('./Manager/VehicleManager.js');

let car1 = new Vehicle("1234acfe", "available", null, VehicleType.CAR, parkingLot);
let car2 = new Vehicle("5234xbhf", "available", null, VehicleType.CAR, parkingLot);
let car3 = new Vehicle("7234skdb", "available", null, VehicleType.CAR, parkingLot);
let car4 = new Vehicle("923sdcbs", "available", null, VehicleType.CAR, parkingLot);

// let vehicleManager = new VehicleManager();

let vehicleService = new VehicleService();

vehicleService.addVehicleService(car1);
vehicleService.addVehicleService(car2);
vehicleService.addVehicleService(car3);
vehicleService.addVehicleService(car4);

let availableVehicles = vehicleService.returnAllVehiclesService();
console.log(" ** availableVehicles **", availableVehicles);

let rentedVehicles = vehicleService.returnRentedVehiclesService();
console.log(" ** rentedVehicles ** ", rentedVehicles);




