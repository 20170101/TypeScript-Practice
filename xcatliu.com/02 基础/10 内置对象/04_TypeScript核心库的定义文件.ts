// TypeScript 核心库的定义文件中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。

// 当你在使用一些常用的方法的时候，TypeScript 实际上已经帮你做了很多类型判断的工作了，比如：
Math.pow(10, '2');//zqkang: error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.