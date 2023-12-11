var c=document.getElementsByClassName("card")[0]
console.log(c.length)
c.style.backgroundColor="green"
var d=document.querySelectorAll(".card-body")[0]
 d.style.color="yellow"
console.log(d)


//querySelector give the first element whereas querySelectorAll gives all elements
var a=document.querySelector(".card-body")
a.style.backgroundColor="cyan"