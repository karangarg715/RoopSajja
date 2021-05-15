'use strict';
const r1={name:"",age:""}
const fun=function(){
    console.log(`hey my name is ${this.name}`)
}
fun.call(r1,"Karan",26)
r1.fun()

