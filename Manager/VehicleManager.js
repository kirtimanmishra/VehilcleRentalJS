let Vehicle = require('./../Models/Vehicle.js');
let uuid = require('./../uuid-generator.js');

class VehicleManager {
  constructor() {
    let userMap = new Map();
  };
  addVehicle(vehicle) {
    let id = uuid();
    vehicle.setId(id);
    userMap.set(id, vehicle);
    return vehicle;
  }
  returnAllVehicles() {
    let allvehicles = [];
    for (const [key, value] of userMap) {
      allvehicles.push(value);
    }
    return allvehicles;
  }
  returnRentedVehicles() {
    let rentedVehicles = [];
    for (const [key, value] of userMap) {
      let vehicle = value;
      if (vehicle.getStatus() == 'riding') {
        rentedVehicles.push(vehicle);
      }
    }
    return rentedVehicles;
  }
};

module.exports = VehicleManager;
