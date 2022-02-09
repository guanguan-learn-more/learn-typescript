//1. 函数声明
function sum(x: number, y: number): number {
    return x + y;
}
sum(1, 2);

//2. 函数表达式
//在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

// 3. 接口定义函数的形状
interface searchJob {
    (name: string, id: number): string
}
const getJob: searchJob = function (name: string, id: number): string {
    return name.substring(2)
}
// 4.参数定义：可选、默认值、剩余参数
function buildName(firstName: string = 'Joy', lastName?: string, ...items: Array<any>): string {
    return lastName ? firstName + lastName : firstName
}
buildName('Guan', 'Qingchao',[32,'Color']);


//5.重载：允许一个函数接受不同数量或类型的参数时，作出不同的处理。
//重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
