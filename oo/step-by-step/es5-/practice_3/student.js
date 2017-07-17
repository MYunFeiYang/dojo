/**
 * Created by yunfeiyang on 17-7-14.
 */
class Student extends Person{
    constructor(name,age,Class){
        super(name,age );
        this.Class=Class;
    }
    introduce(){
        return `I am a Student. I am at ${this.Class}. `
    }
}
module.exports=Student;