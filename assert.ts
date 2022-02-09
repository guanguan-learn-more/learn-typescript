//类型断言as
// 1.将联合类型断言为其中某一种类型
interface Fish {
    name: string;
    swim(): void;
}
interface Cat {
    name: string;
    run(): void;
}
function isFish(animal: Cat | Fish) {
    // if (typeof animal.swim === 'function') {
    //     return true;
    // }
    if (typeof (animal as Fish).swim === "function") {
        return true;
    }
    return false;
}

// 2. 将一个父类断言为更加具体的子类
class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}
function isApiError(error: Error) {
    if (typeof (error as ApiError).code === "number") {
        return true;
    }
    return false;
}

// 3. 将any断言为任何具体的类型
function getCacheData(key: string): any {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom = getCacheData("tom") as Cat;
tom.run();

// 4. 类型断言限制 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可
interface Animal {
    name: string;
}
// interface Dog {
//   name: string;
//   run(): void;
// }
//等价于
interface Dog extends Animal {
    run(): void;
}
let Tom: Dog = {
    name: 'tom',
    run: () => console.log('i am a dog ')
}
let animal: Animal = tom;

function testAnimal(animal: Animal) {
    return (animal as Cat);
}
function testCat(cat: Cat) {
    return (cat as Animal);
}

// 5. 双重断言
interface Fish{
    swim():void
}
interface Cat{
    run():void
}
function testFish(fish:Fish){
    //return fish as Cat //fish和Cat互相不兼容
    return fish as any as Cat
}