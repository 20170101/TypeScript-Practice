//commandline是字符串
var options = { program: 'test1', commandline: 'hello' };
console.log(options.commandline);
//commandline是字符串数组
options = { program: 'test1', commandline: ['hello', 'world'] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);
//commandline是一个函数表达式
options = { program: 'test1', commandline: function () { return '**hello world**'; } };
var fn = options.commandline;
console.log(fn());
