describe('tests of practice 01', function () {

    it("given Person with age=21 and name is Tom, get introduce", function () {

        var person = new Student(21, "Tom", 2);
        var intro = person.introduce();

        expect(intro).toBe("I am in class 2");
    })

});

