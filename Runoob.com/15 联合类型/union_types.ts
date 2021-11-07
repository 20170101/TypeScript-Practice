let v:string|number;
v=12;
console.log("数字为："+v);
v="hello";
console.log("字符串为："+v);
// v=true;//赋值其它类型会报错(编译时即报错)：union_types.ts:6:1 - error TS2322: Type 'boolean' is not assignable to type 'string | number'.