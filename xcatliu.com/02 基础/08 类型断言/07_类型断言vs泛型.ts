// 本小节的前置知识点：泛型(http://ts.xcatliu.com/advanced/generics.html
// 还是这个例子：
function getCacheData(key:string):any {
    return (window as any).cache[key];
}
interface Cat{
    name:string;
    run():void;
}
const tom=getCacheData('tom') as Cat;
tom.run();

// 我们还有第三种方式可以解决这个问题，那就是泛型：
function getCacheData2<T>(key:string):T {
    return (window as any).cache[key];
}
const tom2=getCacheData<Cat>('tom');
tom2.run();
// 通过给 getCacheData 函数添加了一个泛型 <T>，我们可以更加规范的实现对 getCacheData 返回值的约束，这也同时去除掉了代码中的 any，是最优的一个解决方案。