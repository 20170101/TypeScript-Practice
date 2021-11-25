//一、如果是一个普通类型，在赋值过程中改变类型是不被允许的：
// let x: string = 'seven';
// x = 7;//Type 'number' is not assignable to type 'string'.
// console.log(x);
//但如果是 any 类型，则允许被赋值为任意类型:
// let xx: any = 'seven';
// xx = 7;
// console.log(xx);
//二、在任意值上访问任何属性都是允许的, 也允许调用任何方法
// let anyThing:string ='hello';
// console.log(anyThing.myName);// Property 'myName' does not exist on type 'string'.
// console.log(anyThing.myName.firstName);//Property 'myName' does not exist on type 'string'.
// anyThing.setName(anyThing.myName);//Property 'setName' does not exist on type 'string'.
// let anyThing:any ='hello';
// console.log(anyThing.myName);//可以编译通过, 运行时输出undefined
// console.log(anyThing.myName.firstName);//可以编译通过,但运行时报错:TypeError: Cannot read property 'firstName' of undefined
// anyThing.setName(anyThing.myName);//可以编译通过,但运行时报错：TypeError: anyThing.setName is not a function
//三、变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
var x;
x = 'seven';
x = 7;
x.setName('Tom');
