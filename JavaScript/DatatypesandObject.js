//Primitve datatypes
var a=null;
var b="345";
var c="Aadrika";
var d=BigInt("587");
var e=true;
var f=Symbol("Hey I am Symbol");
var g
console.log(a,b,c,d,e,f,g);

//Non-primitive datatype 
//object:used to make key-value pair(mapping) in Js
const item ={
    "Harry":true,//here harry is a key (key- property that has a value) and true is key's value 
    "Aad":23,
    "What":undefined

}
//can access the particular key of the object from either of the ways
console.log(item.Harry);
console.log(item["Aad"]);