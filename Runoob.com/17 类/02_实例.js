var Car = /** @class */ (function () {
    //构造函数：
    function Car(engine) {
        this.engine = engine;
    }
    //方法：
    Car.prototype.disp = function () {
        console.log('函数中显示发动机型号：' + this.engine);
    };
    return Car;
}());
//创建一个对象：
var obj = new Car('xxsy1');
//访问字段：
console.log('读取发动机型号：' + obj.engine);
//访问方法：
obj.disp();
