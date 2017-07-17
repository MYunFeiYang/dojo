'use strict';

describe('step-by-step', function() {

    it('practice_1', function () {
        let result=new Person('Tom',21).introduce();
        let Except_String="My name is Tom. I am 21 years old."
        expect(Except_String).toEqual(result);
    });
    it('practice_2', function () {
        let result=new Person('Tom',21).introduce();
        let Except_String="My name is Tom. I am 21 years old."
        expect(Except_String).toEqual(result);
    });
    it('practice_3', function () {
        let result=new Student('Tom',21,'Class 2').introduce();
        let Except_String="I am a Student. I am at Class 2. "
        expect(Except_String).toEqual(result);
    });
    it('practice_4', function () {
        let result=new Worker('Tom',21,).introduce();
        let Except_String="I am a Worker. I have a job."
        expect(Except_String).toEqual(result);
    });
});
