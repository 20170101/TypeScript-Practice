// 但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西
// 这时，可以使用declare var来定义它的类型：
// declare var jQuery: (selector: string) => any;
// jQuery('#foo');

//上例中，declare var并未真的定义一个变量，只是定义了全局变量jQuery的类型，仅仅会用于编译时的检查，在编译结果中会被删除，它的编译结果：
// jQuery('#foo');

// 除了 declare var 之外，还有其他很多种声明语句，将会在后面详细介绍。