// let x: string|number;
// x='seven';//可以编译通过
// x=7;//可以编译通过

//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法:
// function getLength(x: string|number):number{
//     return x.length;//error TS2339: Property 'length' does not exist on type 'string | number'. Property 'length' does not exist on type 'number'.
// }
//访问 string 和 number 的共有属性是没问题的：
// function getString(x: string|number):string{
//     return x.toString();//可编译通过
// }

//联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：（zqkang 推论出类型后就不用一定是这几种类型共有的属性了）
let x:string|number;
x='seven';
console.log(x.length);//可编译通过 5
x=7;
console.log(x.length);//编译时报错：error TS2339: Property 'length' does not exist on type 'number'.



