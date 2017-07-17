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
class Student extends Person{
    constructor(name,age,Class){
        super(name,age );
        this.Class=Class;
    }
    introduce(){
        return super.introduce() + `I am a Student. I am at ${this.Class}.`
    }
}
class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return super.introduce() + `I am a Worker. I have a job.`
    }
}