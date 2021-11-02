let Vehicle = require('./../Models/Vehicle.js');
let VehicleManager = require('./../Manager/VehicleManager.js');

class VehicleService extends VehicleManager {
  constructor() {

  };
  addVehicleService(vehicle) {
    return VehicleManager.addVehicle(vehicle);
  }
  returnAllVehiclesService() {
    return VehicleManager.returnAllVehicles();
  }
  returnRentedVehiclesService() {
    return VehicleManager.returnRentedVehicles();
  }
};

module.exports = VehicleService;