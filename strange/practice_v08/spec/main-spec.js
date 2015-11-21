//  Your test here

describe('tests of practice 01', function () {

    it("given Persion with age=21 and name is Tom, get introduce", function () {

        var person = new Student(21, "Tom");
        Class.prototype.assign_leader(person);
        var intro = person.introduce();

        expect(intro).toBe("My name is Tom. I am 21 years old. I am in class 2. I am a leader.");
    })

});