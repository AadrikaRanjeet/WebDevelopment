for(let i=0;i<5;i++)
{
    console.log(i)
}

//for-in loop
let obj={
    Harry :90,
    Abhy:45,
    Akku:34
}
for(let a in obj)
{
    console.log("numbers of "+a+"are"+obj[a])
}


//for-of loop : the object must be iterable
for(let a of "Aadrika")
{
    console.log(a)
} 