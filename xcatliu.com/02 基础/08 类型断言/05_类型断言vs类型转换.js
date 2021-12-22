// 类型断言只会影响 TypeScript 编译时的类型，类型断言语句在编译结果中会被删除：
function toBoolean(sth) {
    return sth;
}
console.log(toBoolean(1));
// 在上面的例子中，将 something 断言为 boolean 虽然可以通过编译，但是并没有什么用，代码在编译后会变成：
// 自己tsc 05_类型断言 vs 类型转换.ts 之后查看编译后的js文件看
