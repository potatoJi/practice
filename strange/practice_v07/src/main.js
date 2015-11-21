function Class (number) {
    this.number= number;
    //return this.number;
};

function Person (age, name) {
    this.age = age;
    this.name = name;
};

Person.prototype.introduce = function () {
    return "My name is " + this.name + ". I am " + this.age + " years old.";
};

function Student (age, name) {
    Person.call (this, age, name);
    this.class = new Class();
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
    return Person.prototype.introduce.call(this, arguments) + "I am in class " + this.class.number;
};

function Teacher (age, name, _class) {
    Person.call (this, age, name);
    this._class = _class;
};

Teacher.prototype.introduce = function () {
    if (this._class==null){
        return Person.prototype.introduce.call(this, arguments) + "I am a teacher.I teach no class.";
    }
    else{
        return Person.prototype.introduce.call(this, arguments) + "I am a teacher.I teach class " + this._class;
    }
};

Teacher.prototype.introduceWith = function(student){
    if (student=="Jerry") {
        return Person.prototype.introduce.call(this, arguments) + "I am a teacher.I teach " + student;
    }
    else{
        return Person.prototype.introduce.call(this, arguments) + "I am a teacher.I don't teach" + student;
    }
};