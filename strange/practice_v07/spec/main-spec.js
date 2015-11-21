//  Your test here

describe('tests of practice 01', function () {

    it("given Persion with age=21 and name is Tom, get introduce", function () {

        var person = new Student(21, "Tom");
        person.class=new Class(2);
        var intro = person.introduce();
        //var compare = person.introduceWith("Jerry");

        expect(intro).toBe("My name is Tom. I am 21 years old.I am a teacher.I am in class 2");
        //expect(compare).toBe("My name is Tom. I am 21 years old.I am a teacher.I teach Jerry");
    })

});