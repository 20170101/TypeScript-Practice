// DOM 和 BOM 提供的内置对象有： Document、HTMLElement、Event、NodeList 等。

// TypeScript 中会经常用到这些类型：
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e:MouseEvent) {
    //do sth
})

// 它们的定义文件同样在 TypeScript 核心库的定义文件中:
// https://github.com/Microsoft/TypeScript/tree/main/src/lib