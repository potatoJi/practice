var Person = function (age, name) {
    this._age = age;
    this._name = name;
};

Person.prototype.introduce = function () {
    alert(”My name is " + this._name + ". I am " + this._age + " years old.”);
};
