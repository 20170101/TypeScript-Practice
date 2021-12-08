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
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log('number 123 reverse is: ' + reverse(123));
console.log('string abc reverse is: ' + reverse('abc'));
//上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。
//注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
