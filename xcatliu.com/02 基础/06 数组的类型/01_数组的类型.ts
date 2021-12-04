//类型 + 方括号 表示法：
let arr1: number[] =[1,2,3];//可编译通过
// let arr2: number[]=[1,'2',3];//编译出错：error TS2322: Type 'string' is not assignable to type 'number'.

//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
// arr1.push('4');//编译出错：error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.


//我们也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组：
let arr3: Array<number> =[1,2];//可编译通过


//接口也可以用来描述数组：
interface NumberArray{
    [index: number]: number;
}
let arr4:NumberArray=[1,2];//可编译通过
//虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。
//不过有一种情况例外，那就是它常用来表示类数组。


//类数组（Array-like Object）不是数组类型，比如 arguments：
// function sum() {
//     let args: number[] =arguments;//编译出错：error TS2740: Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 15 more.
// }
//上例中，arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：
function sum() {//可编译通过
    let args:{
        [index:number]:number;
        length:number;
        callee:Function;
    }=arguments;
}
//事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
function sum2() {//可编译通过
    let args: IArguments=arguments;
}
// 其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
// interface IArguments {
//     [index: number]: any;
//     length: number;
//     callee: Function;
// }


// any 在数组中的应用:
let arr5: any[]=['1', 2, true];//可编译通过