'use strict';

describe('step-by-step', function() {

    it('practice_7', function () {
        let result1=new Person('Tom',21).introduce();
        let result2=new Student('Tom',21,'Class 2').introduce();
        let result3=new Teacher('Tom',21,'Class 2').introduce();
        let Except_String1="My name is Tom. I am 21 years old.";
        let Except_String2="My name is Tom. I am 21 years old. I am a Student. I am at Class 2.";
        let Except_String3="My name is Tom. I am 21 years old.I am a Teacher. I teach Class 2.";
        expect(Except_String1).toEqual(result1);
        expect(Except_String2).toEqual(result2);
        expect(Except_String3).toEqual(result3);
});
});
