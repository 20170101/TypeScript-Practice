// 在这个例子中：
function getCacheData(key) {
    return window.cache[key];
}
var tom = getCacheData('tom');
tom.run();
// 我们使用 as Cat 将 any 类型断言为了 Cat 类型。
// 但实际上还有其他方式可以解决这个问题：
var tom2 = getCacheData('tom');
tom2.run();
var animal = {
    name: 'tom'
};
var tom3 = animal;
