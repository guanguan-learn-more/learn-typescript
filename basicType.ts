let isUser: boolean = false;
let count: number = 1243;
let userName: string = 'Joy';

//联合类型
let code: string | number;
code = 32;
code = 'TEMPLATE'
function getCode(code: string | number): number {
    return code.toString().length;
    // return code.length; //取联合类型共有的属性
}
//接口（对象）
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

// 数组
// 1.「类型 + 方括号」表示法 2.泛型Array<elemType> 
let Fibonacci: number[] = [2342, 545]
let Books: Array<string> = ['JS', 'CSS']
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];

//类数组
function sum() {
    let args: IArguments = arguments;
}