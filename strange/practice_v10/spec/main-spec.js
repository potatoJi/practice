//  Your test here

describe('tests of practice 01', function () {

    it("given Persion with age=21 and name is Tom, get introduce", function () {

        var newperson = new Student(21,"Tom");
        var person = new Teacher(21,"Tom",[2,3]);
        var intro = person.isTeaching(newperson);

        expect(intro).toBe(true);
    })

});