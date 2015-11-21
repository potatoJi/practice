var Person = function (age, name) {
    this._age = age;
    this._name = name;
};

Person.prototype.introduce = function () {
    return "My name is " + this._name + ". I am " + this._age + " years old.";
};

function Student(age, name, Class) {
    Person.call(this, age, name);
    this.class=Class;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.introduce=function(){
    alert("I am a student, I am at " + this.Class);
}