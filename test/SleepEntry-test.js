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
  
});
