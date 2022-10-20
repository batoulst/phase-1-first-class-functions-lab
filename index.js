// Code your solution in this file!
const returnFirstTwoDrivers = function (names) {
  const first2names = names.slice(0, 2);
  return first2names;
};
const returnLastTwoDrivers = (names) => {
  const last2names = names.slice(-2);
  return last2names;
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (num) => {
  return function (fare) {
    return fare * num;
  };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(arrayOfDrivers, fun) {
  return fun(arrayOfDrivers);
}
