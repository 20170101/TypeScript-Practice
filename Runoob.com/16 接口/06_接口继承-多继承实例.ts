interface IPerson1{
    v1:number
}

interface IPerson2{
    v2:number
}

interface Child extends IPerson1, IPerson2{};

var Iobj:Child={v1:11,v2:22};
console.log(Iobj.v1);
console.log(Iobj.v2);