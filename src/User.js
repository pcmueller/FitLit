class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.address = user.address;
    this.email = user.email;
    this.stride = user.strideLength;
    this.dailyStepGoal = user.dailyStepGoal;
    this.friends = user.friends;
  }

  returnFirstName() {
    const splitName = this.name.split(' ');
    return splitName[0];
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}