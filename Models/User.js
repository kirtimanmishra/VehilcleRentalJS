class User {
  constructor(email, name, locationdId) {
    this.details = {
      email,
      name,
      locationdId
    }
  }
  setId(uuid) {
    this.details.id = uuid;
  }
  getId() {
    return this.details.id;
  }
};

module.exports = User;
