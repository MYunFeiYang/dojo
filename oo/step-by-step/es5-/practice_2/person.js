/**
 * Created by yunfeiyang on 17-7-14.
 */
"use strict"
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

module.exports = Person;