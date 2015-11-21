#   需求

构造一个Person类，需要有age和name属性，以及一个introduce方法，其中introduce方法返回字符串形如：

    My name is Tom. I am 21 years old.


#   示例

main.js

```javascript
var Person = function (age, name) {
    this._age = age;
    this._name = name;
};

Person.prototype.introduce = function () {
    return "My name is " + this._name + ". I am " + this._age + " years old.";
};
```


main-spec.js

```javascript

describe('tests of practice 01', function () {

    it("given Persion with age=21 and name is Tom, get introduce", function () {

        var person = new Person(21, "Tom");
        var intro = person.introduce();

        expect(intro).toBe("My name is Tom. I am 21 years old.");
    })

});
```


然后运行对应目录下的SpecRunner.html网页，查看结果，如果显示为绿色，则为通过测试
