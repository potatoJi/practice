function Person (age, name) {
    this.age = age;
    this.name = name;
};

Person.prototype.basic_introduce=function(name,age){
    return "My name is " + name + ". I am " + age + " years old.";
};

Person.prototype.introduce = function () {
    return Person.prototype.basic_introduce(this.name,this.age);
};

function Student(age, name, _class) {
    Person.call (this, age, name);
    this.class = _class;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.introduce=function(){
    return Student.prototype.basic_introduce(this.name,this.age) + "I am in class " + this.class;
};

function Worker (age,name) {
    Person.call(this,age,name);
};

Worker.prototype = Object.create(Person.prototype);

Worker.prototype.constructor = Worker;

Worker.prototype.introduce = function(){
    return Worker.prototype.basic_introduce(this.name,this.age) + "I am a worker.I have a job."
};