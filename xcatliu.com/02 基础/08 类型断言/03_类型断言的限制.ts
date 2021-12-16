// 并不是任何一个类型都可以被断言为任何另一个类型。
// 具体来说，若 A 兼容 B，那么 A 能够被断言为 B，B 也能被断言为 A。
// 下面我们通过一个简化的例子，来理解类型断言的限制：
// interface Animal{
//     name: string;
// }
// interface Cat{
//     name:string;
//     run():void;
// }
// let tom: Cat={
//     name: "Tom",
//     run:()=>{console.log('run')}
// };
// let animal: Animal=tom;
// 我们知道，TypeScript 是结构类型系统，类型之间的对比只会比较它们最终的结构，而会忽略它们定义时的关系。
// 在上面的例子中，Cat 包含了 Animal 中的所有属性，除此之外，它还有一个额外的方法 run。TypeScript 并不关心 Cat 和 Animal 之间定义时是什么关系，而只会看它们最终的结构有什么关系——所以它与 Cat extends Animal 是等价的：
// interface Animal{
//     name:string;
// }
// interface Cat extends Animal{
//     run():void;
// }
// 那么也不难理解为什么 Cat 类型的 tom 可以赋值给 Animal 类型的 animal 了——就像面向对象编程中我们可以将子类的实例赋值给类型为父类的变量。
// 我们把它换成 TypeScript 中更专业的说法，即：Animal 兼容 Cat。
// 当 Animal 兼容 Cat 时，它们就可以互相进行类型断言了：
interface Animal{
    name:string;
}
interface Cat{
    name:string;
    run():void;
}
function testAnimal(animal:Animal) {
    return (animal as Cat);
}
function testCat(cat:Cat) {
    return (cat as Animal);
}
// 这样的设计其实也很容易就能理解：
// 允许 animal as Cat 是因为「父类可以被断言为子类」，这个前面已经学习过了
// 允许 cat as Animal 是因为既然子类拥有父类的属性和方法，那么被断言为父类，获取父类的属性、调用父类的方法，就不会有任何问题，故「子类可以被断言为父类」
// 需要注意的是，这里我们使用了简化的父类子类的关系来表达类型的兼容性，而实际上 TypeScript 在判断类型的兼容性时，比这种情况复杂很多，详细请参考[类型的兼容性（TODO)][]章节。

// 综上所述：
// 联合类型可以被断言为其中一个类型
// 父类可以被断言为子类
// 任何类型都可以被断言为 any
// any 可以被断言为任何类型
// 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可
// 其实前四种情况都是最后一个的特例。
