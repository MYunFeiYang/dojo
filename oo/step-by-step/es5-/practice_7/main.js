/**
 * Created by yunfeiyang on 17-7-14.
 */
"use strict"
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return `My name is Tom. I am 21 years old.`;
    }
}
class Student extends Person{
    constructor(name,age,Class){
        super(name,age);
        this.Class=Class;
    }
    introduce(){
        return super.introduce()+` I am a Student. I am at ${this.Class}.`;
}
}
class Teacher extends Person{
    constructor(name,age,Class){
        super(name,age);
        if (Class==" "){
            this.Class='No Class';
        }else{
            this.Class=Class;
        }
    }
    introduce(){
        return super.introduce() + `I am a Teacher. I teach ${this.Class}.`
    }
}

