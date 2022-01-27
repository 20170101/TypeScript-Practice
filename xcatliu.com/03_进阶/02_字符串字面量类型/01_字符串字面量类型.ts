// 字符串字面量类型用来约束取值只能是某个字符串中的一个。
type EventNames = 'click'|'scroll'|'mousemove';
function handleEvent(ele:Element, event: EventNames) {
    //do sth
}
handleEvent(document.getElementById('hello'), 'scroll');//正确
handleEvent(document.getElementById('hello'), 'dblclick');//zqkang: error TS2345: Argument of type '"dblclick"' is not assignable to parameter of type 'EventNames'.

//注意：类型别名与字符串字面量类型都是使用type进行定义。