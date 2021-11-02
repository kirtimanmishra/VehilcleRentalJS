class Inventory {
  constructor(startTime, endTime, vehicleId) {
    this.details = { startTime, endTime, vehicleId };
  }
  setId(uuid) {
    this.details.id = uuid;
  }
  getId() {
    return this.details.id;
  }
};
module.exports = Inventory;

