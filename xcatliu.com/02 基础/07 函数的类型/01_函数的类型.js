//一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：
function sum(x, y) {
    return x + y;
}
//注意，输入多余的（或者少于要求的）参数，是不被允许的：
// sum(1,2,3);//编译出错：error TS2554: Expected 2 arguments, but got 3.
// sum(1);//编译出错：error TS2554: Expected 2 arguments, but got 1.
//如果要我们现在写一个对函数表达式（Function Expression）的定义，可能会写成这样：
var mySum = function (x, y) {
    return x + y;
};
//这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样：
var mySum2 = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (s, ss) {
    return s.search(ss) !== -1;
};
console.log(mySearch('abc', 'a')); //可编译通过，输出true
//采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。
var myS2;
myS2 = function (source) {
    return true;
};
// console.log(myS2('aaa'));//zqkang：编译出错  error TS2554: Expected 2 arguments, but got 1.
// let myS3: SearchFunc;
// myS3 = function(source:number) {//zqkang: 与inerface相比类型不同且少一个参数，编译出错：error TS2322: Type '(source: number) => true' is not assignable to type 'SearchFunc'.
//                 //Types of parameters 'source' and 'source' are incompatible.
//                 //Type 'string' is not assignable to type 'number'.
//     return true;
// }
// 与接口中的可选属性类似，我们用 ? 表示可选的参数：
// function buildName(firstName:string, lastName?:string) {
//     if(lastName){
//         return firstName+' '+lastName;
//     }else{
//         return firstName;
//     }
// }
// let tomcat=buildName('tom', 'cat');
// let tom=buildName('tom');
// console.log(tomcat);
// console.log(tom);
//需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了：
// function buildName(firstName?:string, lastName:string) {//编译出错： error TS1016: A required parameter cannot follow an optional parameter.
//     if(firstName){
//         return firstName+' '+lastName;
//     }else{
//         return lastName;
//     }
// }
// TypeScript 会将添加了默认值的参数识别为可选参数：
// function buildName(firstName:string, lastName: string='cat') {
//     return firstName+' '+lastName;
// }
// let tomcat=buildName('tom', 'cat');
// let tom=buildName('tom');
// console.log(tomcat);
// console.log(tom);
// 此时就不受「可选参数必须接在必需参数后面」的限制了：
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'tom'; }
    return firstName + ' ' + lastName;
}
var tomcat = buildName('tom', 'cat');
var tom = buildName(undefined, 'cat');
console.log(tomcat);
console.log(tom);
