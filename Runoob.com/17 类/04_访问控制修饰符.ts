class Encapsulate{
    str1:string='hello';
    private str2:string='world';
}

var obj=new Encapsulate();
console.log(obj.str1);
console.log(obj.str2);//编译时即报错：04_访问控制修饰符.ts:8:17 - error TS2341: Property 'str2' is private and only accessible within class 'Encapsulate'.