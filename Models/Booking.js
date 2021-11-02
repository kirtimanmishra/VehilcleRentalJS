class ParkingLot {
  constructor(userId, vehicleId, bookingDatem, expiryDate) {
    this.details = {
      userId, vehicleId, bookingDatem, expiryDate
    }
  }
  setId(uuid) {
    this.details.id = uuid;
  }
  getId() {
    return this.details.id;
  }
};

module.exports = ParkingLot;
