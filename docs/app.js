'use strict';

//variables

let guestName = prompt('Please Enter Guest Name:');
let guestMessage = 'Guest: ' + guestName;
let numberofNights = parseInt(
  prompt('Please Enter The Number Of Nights For Your Stay: ')
);
let nightlyRate = 225;
let subTotal = numberofNights * nightlyRate;
let pstRate = 0.08;
let pstAmount = subTotal * pstRate;
let gstRate = 0.05;
let gstAmount = subTotal * gstRate;
let total = subtotal + pstAmount + gstAmount;
