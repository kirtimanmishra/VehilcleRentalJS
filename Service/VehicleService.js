let Vehicle = require('./../Models/Vehicle.js');
let VehicleManager = require('./../Manager/VehicleManager.js');

class VehicleService extends VehicleManager {
  constructor() {
    super()
  };
  addVehicleService(vehicle) {
    return super.addVehicle(vehicle);
  }
  returnAllVehiclesService() {
    return super.returnAllVehicles();
  }
  returnRentedVehiclesService() {
    return super.returnRentedVehicles();
  }
};


module.exports = VehicleService;