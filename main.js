'use strict';

const randomPassword = require('./index.js');
let length = 8;
let lowercase = false;
let uppercase = false;
let numbers = false;
let symbols = false;
process.argv.forEach((val, index) => {
    if (val.trim().startsWith('length')) {
        length = Number(val.trim().replace('length=', ''));
        console.log(length);
    }
    if (val.trim().startsWith('lowercase')) {
        lowercase = val.trim().replace('lowercase=', '');
        if (lowercase === 'true') {
            lowercase = true;
        }
        console.log(lowercase)
    }
    if (val.trim().startsWith('uppercase')) {
        uppercase = val.trim().replace('uppercase=', '');
        if (uppercase === 'true') {
            uppercase = true;
        }
        console.log(uppercase)
    }
    if (val.trim().startsWith('numbers')) {
        numbers = val.trim().replace('numbers=', '');
        if (numbers === 'true') {
            numbers = true;
        }
        console.log(numbers)
    }
    if (val.trim().startsWith('symbols')) {
        symbols = val.trim().replace('symbols=', '');
        if (symbols === 'true') {
            symbols = true;
        }
        console.log(symbols)
    }
})
console.log(randomPassword.getRandomPassword(length, lowercase, uppercase, numbers, symbols));