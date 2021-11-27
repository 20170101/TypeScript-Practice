// let x='seven';//类型推论
// x=7;//编译时报错： error TS2322: Type 'number' is not assignable to type 'string'.

//如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
let y;
y='seven';
y=7;