//接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串
interface namelist {
    [index: number]: string
}

// var list2:namelist=['john',1,'bran'];//错误元素1不是string类型,zqkang:编译时即报错：04_接口和数组.ts:6:28 - error TS2322: Type 'number' is not assignable to type 'string'.

interface ages {
    [index: string]: number
}

var agelist: ages;
agelist["John"] = 15   // 正确 zqkang:运行时会报错：TypeError: Cannot set property 'John' of undefined
// agelist[2] = "nine"   // 错误,zqkang:编译时即报错：04_接口和数组.ts:14:1 - error TS2322: Type 'string' is not assignable to type 'number'.
console.log(agelist);
