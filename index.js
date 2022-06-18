var count = 6;
function myFunction() {

    count++
    var element= "<div class=card><img src="+"'https://picsum.photos/id/"+count+"/300/200'"+", alt=''></div>"

    count ++;
    document.getElementById("container").innerHTML+=element ;
}

 document.getElementById("my-button").addEventListener("click", ()=>{
    myFunction()

})

// -------------------------------------------------------------------------


window.onscroll = function() {myScrollFunction()};

var header = document.getElementsByTagName("header")[0];
var sticky = header.offsetTop;

function myScrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
