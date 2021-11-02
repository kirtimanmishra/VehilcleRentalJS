let VehicleType = require('./VehicleType.js');

class Vehicle {
  constructor(barcode, status, userId, VehicleType, parkingLot) {
    this.details = { barcode, status, userId, VehicleType, parkingLot };
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

