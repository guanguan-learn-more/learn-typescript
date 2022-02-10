// 类


// 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
// 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
// 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
// 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
// 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
// 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口


// public 任何地方被访问到
// private 不能在声明它的类的外部访问
// protected 和 private 类似，区别是它在子类中也是允许被访问的
class Animal {
    public name: string
    constructor(name) {
        this.name = name
    }
    sayHi() {
        console.log(`My name is ${this.name}`)
    }
}
let a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack

class Cat extends Animal {
    constructor(name) {
        super(name); // 调用父类的 constructor(name)
        console.log(this.name);
    }
    sayHi() {
        return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
    }
}

let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom



// 1. 抽象类 ： abstract 用于定义抽象类和其中的抽象方法。
// 抽象类中的抽象方法必须被子类实现 不可以直接被实例化
abstract class Animal2 {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}

class Cat2 extends Animal2 {
    // 需要实现抽象方法
    public sayHi() {
        console.log(`Meow, My name is ${this.name}`);
    }
}

let cat = new Cat2('Tom');

// 2. 类接口implements
// 一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，
// 这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。
interface Alarm {
    alert(): void
}
interface Light {
    lightOn(): void,
    lightOff(): void
}
// 接口继承接口
interface LightableAlarm extends Alarm {
    lightOn(): void;
    lightOff(): void;
}
class Car2 implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}