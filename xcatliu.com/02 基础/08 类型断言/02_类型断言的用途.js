//类型断言的常见用途有以下几种：
// 1.将一个联合类型断言为其中一个类型：
// 之前提到过，当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法
// 而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，比如：
// interface Cat{
//     name:string;
//     run(): void;
// }
// interface Fish{
//     name:string;
//     swim():void;
// }
// function isFish(animal:Cat|Fish) {
//     if(typeof animal.swim ==='function'){//zqkang:编译时报错：error TS2339: Property 'swim' does not exist on type 'Cat | Fish'.Property 'swim' does not exist on type 'Cat'.
//         return true;
//     }
//     return false;
// }
// 上面的例子中，获取 animal.swim 的时候会报错。此时可以使用类型断言，将 animal 断言成 Fish：
// function isFish(animal:Cat|Fish) {
//     if(typeof (animal as Fish).swim === 'function'){//zqkang:类型断言后可以通过编译了
//         return true;
//     }
//     return false;
// }
//需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：
// function swim(animal:Cat|Fish) {
//     (animal as Fish).swim();//zqkang:本ts可编译通过，但js中会报错：TypeError: animal.swim is not a function
// }
// const tom:Cat={
//     name: 'Tom',
//     run(){console.log('run')}
// };
// swim(tom);
/**
 * zqkang:本ts可编译通过，但js中会报错：TypeError: animal.swim is not a function
 * 原因是 (animal as Fish).swim() 这段代码隐藏了 animal 可能为 Cat 的情况，将 animal 直接断言为 Fish 了，而 TypeScript 编译器信任了我们的断言，故在调用 swim() 时没有编译错误。
 * 可是 swim 函数接受的参数是 Cat | Fish，一旦传入的参数是 Cat 类型的变量，由于 Cat 上没有 swim 方法，就会导致运行时错误了。
 * 总之，使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。
 */
//2.将一个父类断言为更加具体的子类：
// 当类之间有继承关系时，类型断言也是很常见的：
// class ApiError extends Error{
//     code: number =0;
// }
// class HttpError extends Error{
//     statusCode:number=200;
// }
// function isApiError(error:Error) {
//     if(typeof (error as ApiError).code ==='number'){
//         return true;
//     }
//     return false;
// }
/**
 * 上面的例子中，我们声明了函数 isApiError，它用来判断传入的参数是不是 ApiError 类型，为了实现这样一个函数，它的参数的类型肯定得是比较抽象的父类 Error，这样的话这个函数就能接受 Error 或它的子类作为参数了。
 * 但是由于父类 Error 中没有 code 属性，故直接获取 error.code 会报错，需要使用类型断言获取 (error as ApiError).code。
 */
//大家可能会注意到，在这个例子中有一个更合适的方式来判断是不是 ApiError，那就是使用 instanceof：
// function isApiError(error: Error) {
//     if (error instanceof ApiError) {
//         return true;
//     }
//     return false;
// }
//上面的例子中，确实使用 instanceof 更加合适，因为 ApiError 是一个 JavaScript 的类，能够通过 instanceof 来判断 error 是否是它的实例。
//但是有的情况下 ApiError 和 HttpError 不是一个真正的类，而只是一个 TypeScript 的接口（interface），接口是一个类型，不是一个真正的值，它在编译结果中会被删除，当然就无法使用 instanceof 来做运行时判断了：
// interface ApiError extends Error{
//     code: number;
// }
// interface HttpError extends Error{
//     statusCode: number;
// }
// function isApiError(error:Error) {
//     if(error instanceof ApiError){//zqkang: 编译失败 'ApiError' only refers to a type, but is being used as a value here.
//         return true;
//     }
//     return false;
// }
//此时就只能用类型断言，通过判断是否存在code属性，来判断传入的参数是不是ApiError了：
// function isApiError(error:Error) {
//     if(typeof (error as ApiError).code ==='number'){
//         return true;
//     }
//     return false;
// }
//3.将任何一个类型断言为any:
// 有的时候，我们非常确定这段代码不会出错，比如下面这个例子：
// window.foo =1;//zqkang：编译会报错 Property 'foo' does not exist on type 'Window & typeof globalThis'.
//上面的例子中，我们需要在 window 上添加一个属性 foo，但 TypeScript 编译时会报错，提示我们 window 上不存在 foo 属性。
// 此时我们可以使用 as any 临时将 window 断言为 any 类型：
window.foo = 1;
