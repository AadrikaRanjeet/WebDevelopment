var user=alert("enter s,w or g")
var a=Math.floor(Math.random()*3)
var ab=["s","w","g"][a]

const fun=(user,ab) =>{
  if(user===ab)
  {
    return 0;
  }
  else if(user==="s"&&cpu==="w")
  {
    return "cpu"
  }
  else if(user==="g"&&cpu==="w")
  {
    return "user"
  }

}
let match=fun(user,ab)
console.log("winner is "+match)
