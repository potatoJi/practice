function Person (age, name) {
    this._age = age;
    this.name = name;
};

Person.prototype.introduce = function () {
    return "My name is " + this._name + ". I am " + this._age + " years old.";
};

function Student(age, name, Class) {
    Person.call(this, age, name);
    this._Class=Class;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.introduce=function(){
    return "I am in class " + this._Class;
};