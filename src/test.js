class Super {
}
class MyTestClass extends String{
	constructor() {
		super();
		this.name = 'Yam';
	}
	say() {
		var _m = MyTestClass;
		console.log('Hi, ' + this.name + ". [" + _m.var1 + "|" +_m.var2 + "]");
	}
}
MyTestClass.var1 = 123;
MyTestClass.var2 = 'abc';

var t = new MyTestClass();
t.say();
console.log(t.__proto__, MyTestClass.prototype, MyTestClass.prototype.__proto__);
console.log(MyTestClass.prototype.__proto__ === String.prototype);
console.log(MyTestClass.__proto__ === String);
console.log(MyTestClass.prototype instanceof String);

class Foo {
    constructor() {

    }
    static calc(x, y) {
        return x + y;
    }
}
console.log(Foo.calc(1, 2)); // 3
var foo = new Foo();
//foo.calc(1, 2); // TypeError. undefined is not a function

class P {
    constructor() {
        console.log(...arguments);
        console.log(new.target === C);
    }
}
class C extends P {
    constructor() {
        super(...arguments);
    }
}
var a = new C(1, 2, 3, 4, 5); // 1 2 3 4 5 // true