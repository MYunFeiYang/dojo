
"use strict"
class Class{
    constructor(number){
        this.number=number;
        this.student=[];
    }
    assignLeader(student) {
        if (this.isIn(student)) {
            console.log('It is not one of us');
        } else {
            this.leader = student.id;
            for (let teacher of this.teachers) {
                teacher.informLeader(this, student);
            }
        }

    }
    appendMember(student) {
        student.klass = this;
        this.students.push(student);
        for (let teacher of this.teachers) {
            teacher.informJoin(this, student);
        }
    }
    isIn(student) {
        return student.klass.number == this.number;
    }
}
class Person{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}
class Student extends Person{
    constructor(id,name,age,Class){
        super(id,name,age);
        this.Class=Class.number;
    }
    introduce(){
        return super.introduce() + `I am a Student. I am at Class ${this.Class}.`;
    }
}
class Teacher extends Person{
    constructor(id,name,age,Class){
        super(id,name,age);
        this.Class=Class.number;
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
