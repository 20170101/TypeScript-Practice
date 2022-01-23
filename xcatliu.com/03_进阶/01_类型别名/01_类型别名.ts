// 类型别名用来给一个类型起个新名字
type Name = string;//zqkang: 字符串类型
type NameResolver = ()=>string;//zqkang: 无参数且返回字符串的函数类型
type NameOrResolver = Name | NameResolver;//zqkang: 联合类型
function getName(n: NameOrResolver): Name {
    if(typeof n === 'string'){
        return n;
    }else{
        return n();
    }
}
console.log(getName('abc'));
console.log(getName(()=>'def'));
// 上例中，我们使用type创建类型别名。类型别名常用于联合类型。
