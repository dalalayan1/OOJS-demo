'use strict';

/**
 * ObjConstructor - object constructor
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {string} message 
 */
var ObjConstructor = function(firstName, lastName, message){
    this.firstName = firstName || 'jon';
    this.lastName = lastName || 'snow';
    this.name = `${this.firstName} ${this.lastName}`;
    this.message = message || 'you know nothing!';
    this.greeting = function(message){
        console.log(`Hello ${this.name}! ${this.message}`);
    }
};

/**
 * Instances of object created which are independent of each other.
 */
var obj1 = new ObjConstructor();
obj1.greeting();

var obj1 = new ObjConstructor('robert', 'baraetheon');
obj1.greeting();

var obj1 = new ObjConstructor('robb', 'stark', 'king in the north!');
obj1.greeting();