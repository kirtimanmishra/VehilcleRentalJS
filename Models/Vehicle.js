let VehicleType = require('./VehicleType.js');

class Vehicle {
  constructor(barcode, status, user, VehicleType, parkingLot) {
    this.details = { barcode, status, user, VehicleType, parkingLot };
  }
  setId(uuid) {
    this.details.id = uuid;
  }
  getId() {
    return this.details.id;
  }
  getStatus() {
    return this.details.status;
  }
};

module.exports = Vehicle;

