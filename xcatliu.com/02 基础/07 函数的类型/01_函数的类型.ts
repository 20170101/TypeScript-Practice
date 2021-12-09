//一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：
function sum(x:number, y:number): number {
    return x+y;
}

//注意，输入多余的（或者少于要求的）参数，是不被允许的：
// sum(1,2,3);//编译出错：error TS2554: Expected 2 arguments, but got 3.
// sum(1);//编译出错：error TS2554: Expected 2 arguments, but got 1.


//如果要我们现在写一个对函数表达式（Function Expression）的定义，可能会写成这样：
let mySum= function (x:number, y:number):number {
    return x+y;
};
//这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样：
let mySum2: (x:number, y:number) => number =function (x:number, y:number): number{
    return x+y;
};
//注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。


//用接口定义函数的形状
//我们也可以使用接口的方式来定义一个函数需要符合的形状：
interface SearchFunc{
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch= function(s:string, ss: string) {//zqkang:这里参数名与interface不符，但参数个数及类型符合，可以编译通过
    return s.search(ss) !== -1;
}
console.log(mySearch('abc', 'a'));//可编译通过，输出true
//采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。
let myS2: SearchFunc;
myS2= function(source:string) {//zqkang: 这里与interface相比少了一个参数，但却编译通过了
    return true;
}
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
// function buildName(firstName:string='tom', lastName:string) {
//     return firstName+' '+lastName;
// }
// let tomcat=buildName('tom', 'cat');
// let tom=buildName(undefined, 'cat');
// console.log(tomcat);
// console.log(tom);

//剩余参数(注意，rest 参数只能是最后一个参数):
// function push(array:any[], ...items: any[]) {//事实上，items 是一个数组。所以我们可以用数组的类型来定义它：
//     items.forEach(function(item) {
//         array.push(item);
//     });
// }
// let a=[];
// push(a, 1,2,3);
// console.log(a);

//重载:
//重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
//比如，我们需要实现一个函数 reverse，输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符串 'olleh'。
//利用联合类型，我们可以这么实现：
// function reverse(x:number | string):number |string|void {
//     if(typeof x === 'number'){
//         return Number(x.toString().split('').reverse().join(''));
//     }else if(typeof x === 'string'){
//         return x.split('').reverse().join('');
//     }
// }
// console.log('number 123 reverse is: '+ reverse(123));
// console.log('string abc reverse is: '+ reverse('abc'));
//然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。
//这时，我们可以使用重载定义多个reverse的函数类型：
function reverse(x:number):number;
function reverse(x:string):string;
function reverse(x:number | string):number |string|void{
    if(typeof x === 'number'){
        return Number(x.toString().split('').reverse().join(''));
    }else if(typeof x ==='string'){
        return x.split('').reverse().join('');
    }
}
console.log('number 123 reverse is: '+ reverse(123));
console.log('string abc reverse is: '+ reverse('abc'));
//上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。
//注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
