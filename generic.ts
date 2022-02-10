// 泛型：指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性


// 1. 函数：在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了。
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(3, 'x'); // ['x', 'x', 'x']
// 多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]


// 2.泛型约束
// 使用了 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状，也就是必须包含 length 属性
interface Lengthwise {
    length: number;
}
function loggingLength<T extends Lengthwise>(arg: T): T {
    return arg
}
loggingLength(7);

// 3. 泛型接口
interface CreateArrayFunc<T> {
    (length: number, value: T): Array<T>;
}
let createArray1: CreateArrayFunc<string>; // 这里需要给出T的具体类型
createArray1 = function <T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray1(3, 'x');


// 4. 泛型类 & 默认值
class CalcNumber<T = number>{
    number: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new CalcNumber<number>();
myGenericNumber.number = 0;
myGenericNumber.add = function (x, y) { return x + y; };
