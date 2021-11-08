//以下实例演示了如何在接口中使用联合类型：
interface RunOptions{
    program:string;//zqkang:这里怎么是分号？不应该是逗号吗？
    commandline:string[]|string|(()=>string);
}

//commandline是字符串
var options:RunOptions ={program:'test1', commandline:'hello'};
console.log(options.commandline);

//commandline是字符串数组
options={program:'test1',commandline:['hello', 'world']};
console.log(options.commandline[0]);
console.log(options.commandline[1]);

//commandline是一个函数表达式
options={program:'test1',commandline:()=>{return '**hello world**';}};

var fn:any=options.commandline;
console.log(fn());