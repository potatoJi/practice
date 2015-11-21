function Class (number) {
    this.number= number;
    //return this.number;
};

Class.prototype.assign_leader = function(Student){
    this.leader = Student.name;
    //return this.leader;
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
    this.class = new Class(2);
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
    if (this.class.leader == "Tom"){
        return Person.prototype.introduce.call(this,arguments) + " I am in class " + this.class.number + ". I am a leader.";
    }
    else{
        return Person.prototype.introduce.call(this,arguments) + "I am a student.I am in class " + this.class.number;
    }
};

function Teacher (age, name, _class) {
    Person.call (this, age, name);
    this.class = _class;
};

Teacher.prototype.introduce = function () {
    if (this._class==null){
        return Person.prototype.introduce.call(this, arguments) + "I am a teacher.I teach no class.";
    }
    else{
        return Person.prototype.introduce.call(this, arguments) + "I am a teacher.I teach class " + this._class;
    }
};
