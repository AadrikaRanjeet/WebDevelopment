// function ClickMe()
// {
//     alert("I got click");
//     var audio=new Audio("sound/tom-1.mp3");
//     audio.play();

// }

// for(var i=0;i<document.querySelectorAll(".drum").length;i++)
// {
// document.querySelectorAll(".drum")[i].addEventListener("click",ClickMe);
// }


//detecting mouseClick
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
    
    var buttoninnerHtml=this.innerHTML;
    makeSound(buttoninnerHtml);
    ButtonAnimation(buttoninnerHtml);
    
});
}

//detecting keypress 
document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
    ButtonAnimation(event.key);
});


function makeSound(key)
{
    switch (key) {
        case 'w':
            var audio=new Audio("sounds/tom-1.mp3");
             audio.play();
             
            break;
            case 'a':
                var audio1=new Audio("sounds/tom-2.mp3");
                 audio1.play();
                break;
                case 's':
                    var audio2=new Audio("sounds/tom-3.mp3");
                     audio2.play();
                    break;    
                    case 'd':
                    var audio2=new Audio("sounds/snare.mp3");
                     audio2.play();
                    break;    
                    case 'j':
                    var audio2=new Audio("sounds/kick.mp3");
                     audio2.play();
                    break; 
                    case 'k':
                    var audio2=new Audio("sounds/snare.mp3");
                     audio2.play();
                    break;
                    case 'l':
                    var audio2=new Audio("sounds/crash.mp3");
                     audio2.play();
                    break;           
        default:
            break;
    }
}
function ButtonAnimation(currentKey)
{
   var currentButton= document.querySelector("."+currentKey);
   currentButton.classList.add("pressed");
   setTimeout(function()
    {
     currentButton.classList.remove("pressed");
    },100);
}


