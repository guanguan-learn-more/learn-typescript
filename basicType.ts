// 1. 基础类型
let isUser: boolean = false;
let count: number = 1243;
let userName: string = 'Joy';

// 2.联合类型
let code: string | number;
code = 32;
code = 'TEMPLATE'
function getCode(code: string | number): number {
    return code.toString().length;
    // return code.length; //取联合类型共有的属性
}


// 3.接口（对象）
interface Person {
    readonly id: number,
    name: string,
    age: number,
    books?: Array<String>,
    //[propName: string]: string, //任意属性取 string 类型的值
    [propName: string]: string | number,
}
let Joy = {
    id: 234324235,
    name: 'Joy Guan',
    age: 18,
}

// 5. 数组
// 1.「类型 + 方括号」表示法 2.泛型Array<elemType> 
let Fibonacci: number[] = [2342, 545]
let Books: Array<string> = ['JS', 'CSS']
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];

// 6.类数组
function sum() {
    let args: IArguments = arguments;
}

// 7.类型别名
type Second = number;

let timeInSecond: number = 10;
let time: Second = 10;

// 8. 字符串字面量类型：用来约束取值只能是某几个字符串中的一个。
type EventName = 'click' | 'scroll' | 'mousemove';
function handleEvent(elem: HTMLElement, event: EventName) {
    // do your logic
}
handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'


// 9. 元组：不同类型的数组
let Alice: [string, number] = ['Alice', 23]


// 10. 枚举
enum Week { Mon = 1, Tue, Thu, San, Fri, Sun = 7 } //普通枚举
console.log(Week["Sun"] === 7)
enum Color { Red, Yellow, Blue }


const enum Directions { Up, Down, Left, Right } //常数枚举 const enum
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];




