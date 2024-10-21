

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop >= 400) {
    
    document.getElementById("Titlebody").className = "exit";
  } else {
    document.getElementById("Titlebody").className = "enter";
  }
}


