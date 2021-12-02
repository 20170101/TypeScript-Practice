interface Person{
    name: string;//注意：这里是分号不是逗号
    age: number;
}//这里不需要分号

// let tom: Person={//可编译通过
//     name:'Tom',//逗号
//     age:25
// };//需要分号

// let tom: Person={
//     name: 13,//编译报错：error TS2322: Type 'number' is not assignable to type 'string'.
//     age:25
// };

//定义的变量比接口少了一些属性是不允许的：
// let x:Person={
//     name:'x'//编译报错：error TS2741: Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.
// };

//多一些属性也是不允许的：
// let tom: Person={
//     name: 'Tom',
//     age:25,
//     address:'cc'//编译报错：error TS2322: Type '{ name: string; age: number; address: string; }' is not assignable to type 'Person'.
//                 // Object literal may only specify known properties, and 'address' does not exist in type 'Person'.
// };

//有时我们希望不要完全匹配一个形状，那么可以用可选属性：
// interface Person2{
//     name: string;
//     age?: number;//可选属性
// }

// let x:Person2={//可编译通过
//     name:'x'
// };

//有时候我们希望一个接口允许有任意的属性，可以使用如下方式：
// interface Person3{
//     name:string;
//     age?:number;
//     [propName:string]:any;
// }
// let x:Person3={//可编译通过
//     name:'x',
//     gender:'male',
//     isFat:false
// };

//需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
// interface Person4{
//     name:string;
//     age?:number;//编译报错： error TS2411: Property 'age' of type 'number' is not assignable to 'string' index type 'string'.
//     [propName:string]:string;
// }
// let x:Person4={//编译报错：error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person4'.
//         //Property 'age' is incompatible with index signature.
//         // Type 'number' is not assignable to type 'string'.
//     name:'x',
//     age:25,
//     gender:'male'
// };

//一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：
// interface Person5{
//     name:string;
//     age?: number;
//     [propName:string]:string|number;
// }
// let x:Person5={//编译通过
//     name:'x',
//     age:25,
//     gender:'male'
// };

//有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：
interface Person6{
    readonly id:number;
    name:string;
    age?:number;
    [propName:string]:any;
}
// let x:Person6={//可编译通过
//     id:12345,
//     name:'x',
//     gender:'male'
// };
// x.id=111;//编译报错：error TS2540: Cannot assign to 'id' because it is a read-only property.
//注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
let x:Person6={//编译出错：error TS2741: Property 'id' is missing in type '{ name: string; gender: string; }' but required in type 'Person6'.
    name:'x',
    gender:'male'
};
x.id=111;//编译出错：error TS2540: Cannot assign to 'id' because it is a read-only property.
