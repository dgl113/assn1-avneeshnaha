'use strict';

var guestName = prompt("Please enter the guest's name:");
console.log('Guest Name:', guestName);

var guestName = prompt("Please enter the guest's name:");
var guestMessage = 'Guest: ' + guestName;
console.log('Guest Message:', guestMessage);

var guestName = prompt("Please enter the guest's name:");
var numberOfNights = parseInt(
  prompt('Please enter the number of nights for the hotel stay:')
);
console.log('Guest Name:', guestName);
console.log('Number of Nights:', numberOfNights);

var guestName = prompt("Please enter the guest's name:");
var numberOfNights = parseInt(
  prompt('Please enter the number of nights for the hotel stay:')
);
var nightlyRate = parseFloat(
  prompt('Please enter the nightly rate for the hotel room (e.g. $225):')
);
console.log('Guest Name:', guestName);
console.log('Number of Nights:', numberOfNights);
console.log('Nightly Rate:', nightlyRate);
var pstRate = parseFloat(
  prompt('Please enter the rate of the provincial sales tax (e.g. 8%):')
);

var gstRate =
  parseFloat(
    prompt('Please enter the rate of the goods and services tax (e.g. 5%):')
  ) / 100;

var subTotal = numberOfNights * nightlyRate;
