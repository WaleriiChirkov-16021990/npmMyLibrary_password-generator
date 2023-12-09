'use strict';

// Написать свою собственную библиотеку и опубликовать в NPM.

function getRandomPassword(length, lowercase, uppercase, numbers, symbols) {
    let result = '';
    let chars = '';
    if (lowercase) {
        chars += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (uppercase) {
        chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (numbers) {
        chars += '0123456789';
    }
    if (symbols) {
        chars += '!@#$%^&*()-._~+|/';
    }
    const charactersLength = chars.length;
    if (charactersLength === 0) {
        chars = 'abcdefghijklmnopqrstuvwxyz';
    }
    if (length <= 0) {
        length = 8;
    }
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

}

module.exports = {getRandomPassword}