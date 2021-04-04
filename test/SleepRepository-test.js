const chai = require('chai');
const expect = chai.expect;

const SleepRepository = require('../src/SleepRepository');
const sleepData = require('./test-data/sleep-data');
const userData = require('./test-data/user-data');

describe('SleepRepository', function() {
  let sleepRepo;

  beforeEach(() => {
    sleepRepo = new SleepRepository(sleepData, userData);
  });

  it("should be a function", function() {
    expect(SleepRepository).to.be.a('function');
  });

  it("should be an instance of SleepRepository", function() {
    expect(sleepRepo).to.be.an.instanceof(SleepRepository);
  });

  it("should store a sleep data array", function() {
    expect(sleepRepo.data).to.be.an('array');
  });

  it("should store a user data array", function() {
    expect(sleepRepo.userData).to.be.an('array');
  });

  it("should be able to store a sleep data entry", function() {
    expect(sleepRepo.data[0]).to.deep.equal({ userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2 });
  });

  it("should calculate the average sleep quality among all users", function() {
    const avgSleepQuality = sleepRepo.calculateAvgSleepQualityAllUsers();

    expect(avgSleepQuality).to.equal(3);
  });

  it.skip("should be able to identify all users with a sleep quality score greater than 3 during a given week", function() {
    const bestSleepers = sleepRepo.retrieveQualitySleepers("2019/06/17");

    // expect(bestSleepers[0]).to.equal(n);
  });

  it("should be able to find the user entry with the highest number of hours slept", function() {
    const bestSleepers = sleepRepo.identifyBestSleeper();

    expect(bestSleepers[0].name).to.equal("Herminia Witting");
    expect(bestSleepers[0].date).to.equal("2019/06/15");
    expect(bestSleepers[0].hoursSlept).to.equal(10.8);

    expect(bestSleepers[1].name).to.equal("Jarvis Considine");
    expect(bestSleepers[1].date).to.equal("2019/06/18");
    expect(bestSleepers[1].hoursSlept).to.equal(10.8);
  });
});