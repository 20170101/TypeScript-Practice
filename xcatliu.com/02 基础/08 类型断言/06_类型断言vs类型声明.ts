// 在这个例子中：
function getCacheData(key:string):any {
    return (window as any).cache[key];
}
interface Cat{
    name: string;
    run():void;
}
const tom=getCacheData('tom') as Cat;
tom.run();
// 我们使用 as Cat 将 any 类型断言为了 Cat 类型。

// 但实际上还有其他方式可以解决这个问题：
const tom2: Cat=getCacheData('tom');
tom2.run();
// 上面的例子中，我们通过类型声明的方式，将 tom 声明为 Cat，然后再将 any 类型的 getCacheData('tom') 赋值给 Cat 类型的 tom。
// 这和类型断言是非常相似的，而且产生的结果也几乎是一样的——tom 在接下来的代码中都变成了 Cat 类型。

// 它们的区别，可以通过这个例子来理解：
interface Animal{
    name:string;
}
const animal: Animal={
    name:'tom'
}
let tom3:Cat=animal;//zqkang 编译报错：Property 'run' is missing in type 'Animal' but required in type 'Cat'.
// 这很容易理解，Animal 可以看作是 Cat 的父类，当然不能将父类的实例赋值给类型为子类的变量。
// 深入的讲，它们的核心区别就在于：
// 1.animal 断言为 Cat，只需要满足 Animal 兼容 Cat 或 Cat 兼容 Animal 即可
// 2.animal 赋值给 tom，需要满足 Cat 兼容 Animal 才行
// 但是 Cat 并不兼容 Animal。

// 知道了它们的核心区别，就知道了类型声明是比类型断言更加严格的。
// 所以为了增加代码的质量，我们最好优先使用类型声明，这也比类型断言的 as 语法更加优雅。