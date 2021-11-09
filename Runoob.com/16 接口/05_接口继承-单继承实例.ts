interface Person{
    age:number
}

interface Musician extends Person{
    instrument:string
}

var drummer=<Musician>{};
drummer.age=27;
drummer.instrument='drums';
console.log(drummer.age);
console.log(drummer.instrument);