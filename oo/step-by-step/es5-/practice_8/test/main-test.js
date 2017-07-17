'use strict';

describe('step-by-step', function() {
    it('practice_8 class_Person',function () {
        let result=new Person('Tom',21).introduce();
        let Except_String='My name is Tom. I am 21 years old.';
        expect(Except_String).toEqual(result);
    })
    it('practice_8 class_Student',function () {
        let number=new Class(2);
        let result=new Student('Tom',21,number).introduce();
        let Except_String='My name is Tom. I am 21 years old.I am a Student. I am at Class 2.';
        expect(Except_String).toEqual(result);
    })
    it('practice_8 class_Teacher',function () {
        let result=new Teacher('Tom',21,2).introduce();
        let Except_String='My name is Tom. I am 21 years old.I am a Teacher. I teach Class 2.';
        expect(Except_String).toEqual(result);
    })
});
