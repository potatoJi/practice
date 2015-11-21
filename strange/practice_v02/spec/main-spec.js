//  Your test here

describe('tests of practice 02’, function () {

    it("given Persion with age=21 and name is Tom, get introduce", function () {

        var person = new Person(21, "Tom");
	var student=new Student(21,”Tom”,2)
        var intro = student.introduce();

        expect(intro).toBe("My name is Tom. I am 21 years old.");
    })

});