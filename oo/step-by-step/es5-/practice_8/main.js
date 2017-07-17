/**
 * Created by yunfeiyang on 17-7-14.
 */
"use strict"
class Class{
    constructor(number){
        this.number=number;
    }
}
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}
class Student extends Person{
    constructor(name,age,Class){
        super(name,age);
        this.Class=Class.number;
    }
    introduce(){
        return super.introduce() + `I am a Student. I am at Class ${this.Class}.`;
    }
}
class Teacher extends Person{
    constructor(name,age,Class){
        super(name,age);
        this.Class=Class;
    }
    introduce(){
        if (this.Class==""){
            return super.introduce()+`I am a Teacher. I teach No Class.`;
        }else {
            return super.introduce()+`I am a Teacher. I teach Class ${this.Class}.`;
        }
    }
    introduceWith(Student){

    }
}
