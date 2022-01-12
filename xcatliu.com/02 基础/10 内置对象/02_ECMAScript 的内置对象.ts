// ECMAScript 标准提供的内置对象有：Boolean、Error、Date、RegExp 等。
// 我们可以在ts中将变量定义为这些类型：
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occrred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
// 更多的内置对象，可以查看 MDN 的文档: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// 而他们的定义文件，则在ts核心库的定义文件中：
// https://github.com/Microsoft/TypeScript/tree/main/src/lib