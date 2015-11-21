function Person (age, name) {
    this.age = age;
    this.name = name;
};

Person.prototype.introduce = function () {
    return "My name is " + this.name + ". I am " + this.age + " years old.";
};

function Student(age, name, _class) {
    Person.call (this, age, name);
    this.class = _class;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.introduce=function(){
    return Person.prototype.introduce.apply(this,arguments) + "I am in class " + this.class;
};

function Worker (age,name) {
    Person.call(this,age,name);
};

Worker.prototype = Object.create(Person.prototype);

Worker.prototype.constructor = Worker;

Worker.prototype.introduce = function(){
    return Person.prototype.introduce.call(this,arguments) + "I am a worker.I have a job."
};