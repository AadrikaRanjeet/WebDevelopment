var name="Apple";
var num=8;
console.log(name+num);
console.log(name+"1");
console.log(typeof(name+num));

const a={
    "Name":"Apoorva",
    "RollNo": 358,
    "Batch": 2021

};
//Note : a is the var pointing to the object it is not the object 

//you cant do this :- a=45; mtlb tum iss var mein object assign kr diye ho toh ab usko change ni kr skte bcoz woh const type hai 

//but you can do this , add key ,alter key's value 
a['friend']="Lacchu" //adding new key-value pair
a['Name']="Sonu"    //changing the value of the key ie already defined 
console.log(a); 

