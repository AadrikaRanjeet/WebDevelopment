$("h1").addClass("big-title margin-50");
console.log($("h1").attr("class"));

$("h1").click(function()
{
    $("h1").css("color","purple");
}
)

$(".but").click(function()
{
    $(this).css("color","green");
    $("h1").css("color","red");
}

)
$("input").keypress(function(event)
{
    $("h1").text(event.key);
}
)

//more easy way 
$("h2").on("mouseover" ,function()
{
    $("h2").css("color","purple");
}
)