const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const userData = require('./test-data/user-data');
const SleepEntry = require('../src/SleepEntry');
const sleepData = require('./test-data/sleep-data');


describe('Sleep', function() {

  beforeEach(() => {
    user1 = new SleepEntry(sleepData[0]);
    user2 = new SleepEntry(sleepData[4]);
    user3 = new SleepEntry(sleepData[8]);
  });

  it('should be a function', function() {
    expect(SleepEntry).to.be.a('function');
  });

  it("should be an instance of SleepEntry", function() {
      expect(user1).to.be.an.instanceof(SleepEntry);
      expect(user2).to.be.an.instanceof(SleepEntry);
      expect(user3).to.be.an.instanceof(SleepEntry);
  });

  it("should store a User's id", function() {
      expect(user1.id).to.equal(1);
      expect(user2.id).to.equal(2);
      expect(user3.id).to.equal(3);
  });

  it("should store a entry date", function() {
      expect(user1.date).to.equal("2019/06/15");
      expect(user2.date).to.equal("2019/06/16");
      expect(user3.date).to.equal("2019/06/17");
  });


});
