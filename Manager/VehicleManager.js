let Vehicle = require('./../Models/Vehicle.js');
let uuid = require('./../uuid-generator.js');

class VehicleManager {
  constructor() {
    this.vehicleMap = new Map();
    this.inventoryMap = new Map();
  };
  addVehicle(vehicle) {
    let id = uuid();
    vehicle.setId(id);
    this.vehicleMap.set(id, vehicle);
    return vehicle;
  }
  returnAllVehicles() {
    let allvehicles = [];
    for (const [key, value] of this.vehicleMap) {
      allvehicles.push(value);
    }
    return allvehicles;
  }
  returnRentedVehicles() {
    console.log("calling here ");
    let rentedVehicles = [];
    for (const [key, value] of this.vehicleMap) {
      let vehicle = value;
      if (vehicle.getStatus() == 'riding') {
        rentedVehicles.push(vehicle);
      }
    }
    return rentedVehicles;
  }
};

module.exports = VehicleManager;
