// 既然：
// 任何类型都可以被断言为 any
// any 可以被断言为任何类型
// 那么我们是不是可以使用双重断言 as any as Foo 来将任何一个类型断言为任何另一个类型呢？
interface Cat{
    run():void;
}
interface Fish{
    swim(): void;
}
function testCat(cat:Cat) {//zqkang: 可编译成功
    return (cat as any as Fish);
}
// 在上面的例子中，若直接使用 cat as Fish 肯定会报错，因为 Cat 和 Fish 互相都不兼容。
// 但是若使用双重断言，则可以打破「要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可」的限制，将任何一个类型断言为任何另一个类型。
// 若你使用了这种双重断言，那么十有八九是非常错误的，它很可能会导致运行时错误。
// 除非迫不得已，千万别用双重断言。