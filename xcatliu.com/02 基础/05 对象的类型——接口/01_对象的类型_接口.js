// let x:Person6={//可编译通过
//     id:12345,
//     name:'x',
//     gender:'male'
// };
// x.id=111;//编译报错：error TS2540: Cannot assign to 'id' because it is a read-only property.
//注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
var x = {
    name: 'x',
    gender: 'male'
};
x.id = 111; //
